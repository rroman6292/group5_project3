const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const homeownerSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, unique: true, required: true, trim: true, match: [/.+@.+\..+/, "Please enter a valid e-mail address"] },
  password: { type: String, required: "Password is required", validate: [({ length }) => length >= 6, "Password should be longer."] },
  phoneNumber: { type: Number, required: true },
  address: { type: String, required: true },
  zipcode: { type: Number, required: true},
});

const Homeowner = mongoose.model("Homeowner", homeownerSchema);

module.exports = Homeowner;