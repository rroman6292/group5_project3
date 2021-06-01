const db = require("../models");
const bcrypt = require("bcrypt")
const auth = require("../utils/auth")

const isCorrectPassword = async function (user, password) {
  return bcrypt.compare(password, user.password);
};

// Defining methods for the booksController
module.exports = {
  findById: function (req, res) {
    db.Homeowner
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllTickets: function (req, res) {
    db.Homeowner
      .find({})
      .then(dbModel => {
        let jobtickets = [];
        dbModel.forEach((user) => {
          jobtickets = jobtickets.concat(user.jobtickets)
        })

        console.log(jobtickets);

        res.json(jobtickets)
      })
      .catch(err => res.status(422).json(err));
  },
  create: async function (req, res) {
    const newUser = req.body;
    newUser.password = await bcrypt.hash(req.body.password, 10);
    db.Homeowner
      .create(newUser)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Homeowner
      .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Homeowner
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  login: async function ({ body }, res) {
    const user = await db.Homeowner.findOne({ email: body.email });
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

