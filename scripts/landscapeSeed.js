const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/landscapelist"
);

const landscapeSeed = [
  {
    company_name: "Green with Envy",
    company_email: "gwe@gmail.com",
    password: "green1234",
    address: "878 South St, Orlando, FL",
    company_phone: "4075558888",
    zip:"32898",
    services: "Landscaping"
  },
  {
    company_name: "A Cut Above Landscaping",
    company_email: "cutsfordays@gmail.com",
    password: "wecut1234",
    address: "14499 Robinson St, Orlando, FL",
    company_phone: "4075557777",
    zip:"32846",
    services: "Landscaping"
  },
  {
    company_name: "A Father and Son Landscaping",
    company_email: "fatherandson@gmail.com",
    password: "father1234",
    address: "12 Pine St, Orlando, FL",
    company_phone: "4074448888",
    zip:"32823",
    services: "Landscaping"
  },
  {
    company_name: "Tree Split",
    company_email: "treesplit@gmail.com",
    password: "splitters1234",
    address: "1400 North St, Orlando, FL",
    company_phone: "4075558866",
    zip:"32809",
    services: "Landscaping"
  },
  {
    company_name: "Rolling Cuts",
    company_email: "rc@gmail.com",
    password: "rolling1234",
    address: "879 Alafaya Trail, Orlando, FL",
    company_phone: "4075557788",
    zip:"32855",
    services: "Landscaping"
  },
  {
    company_name: "Jeff's Landscaping",
    company_email: "jeff@gmail.com",
    password: "jeff1234",
    address: "13456 Dean Rd, Orlando, FL",
    company_phone: "4075558888",
    zip:"32898",
    services: "Landscaping"
  },
  {
    company_name: "Temple of Landscaping",
    company_email: "temple@gmail.com",
    password: "temple1234",
    address: "12345 Temple St, Orlando, FL",
    company_phone: "4075544448",
    zip:"32898",
    services: "Landscaping"
  },
  {
    company_name: "5 Star Landscaping",
    company_email: "5star@gmail.com",
    password: "5star1234",
    address: "1000 Hoffner Rd, Orlando, FL",
    company_phone: "4075558888",
    zip:"32898",
    services: "Landscaping"
  },
  {
    company_name: "The Best Landscaping",
    company_email: "best@gmail.com",
    password: "best1234",
    address: "33444 Curry St, Orlando, FL",
    company_phone: "4075550000",
    zip:"32898",
    services: "Landscaping"
  },
  {
    company_name: "Harry's Landscaping and Tree Removal",
    company_email: "harry@gmail.com",
    password: "harry1234",
    address: "777 Dice St, Orlando, FL",
    company_phone: "4075553458",
    zip:"32898",
    services: "Landscaping"
  },
  
];

db.Landscape
  .remove({})
  .then(() => db.Landscape.collection.insertMany(landscapeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
