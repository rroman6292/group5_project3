const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const homeownerSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  address: { type: String, required: true },
  zipcode: { type: Number, required: true},
});

const Homeowner = mongoose.model("Homeowner", homeownerSchema);

module.exports = Homeowner;