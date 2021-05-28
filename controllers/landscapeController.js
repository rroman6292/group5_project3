const db = require("../models");
const bcrypt = require("bcrypt");
const auth = require("../utils/auth")

const isCorrectPassword = async function (user, password) {
  return bcrypt.compare(password, user.password);
};

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Landscape
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Landscape
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: async function(req, res) {
    const newUser = req.body;
    console.log(newUser);
    newUser.password = await bcrypt.hash(req.body.password, 10);
    db.Landscape
      .create(newUser)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Landscape
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Landscape
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  login: async function({body}, res) {
    const user = await db.Landscape.findOne({ company_email: body.email });
  if (!user) {
    return res.status(400).json({ message: "Can't find this user" });
  }
  const correctPw = await isCorrectPassword(user, body.password);
  if (!correctPw) {
    return res.status(400).json({ message: 'Wrong password!' });
  }
  const token = auth.signToken(user);
  res.json({ token, user });
  }
};
