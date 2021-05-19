const mongoose = require("mongoose");
const db = require("../models");
// const homeownerController = require("../controllers/homeownerController");
const { Homeowner } = require("../models");
const bcrypt = require("bcrypt")

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/landscapelist"
);

const homeownerSeed = [
  {
    firstName: "Guillermo",
    lastName: "Garcia",
    email: "guillermo@mail.com",
    password: "123456",
    phoneNumber: "4071234567",
    address: "123 UCF Coding Bootcamp Ave",
    zipcode: "34761",
  },
  {
    firstName: "Richie",
    lastName: "Roman",
    email: "richie@mail.com",
    password: "123456",
    phoneNumber: "4071234567",
    address: "101 The Great St.",
    zipcode: "32765",
  },
];

db.Homeowner
  .remove({})
  .then(async () => { 

    homeownerSeed.forEach(async (homeowner) => {
      const newUser = homeowner;
      newUser.password = await bcrypt.hash(homeowner.password, 10);
      db.Homeowner
        .create(newUser)
        .then(data => {
          // console.log(data.result.n + " records inserted!");
          console.log("1 records inserted!");
          process.exit(0);
        })
    })
    })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
