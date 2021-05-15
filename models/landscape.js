const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const landscapeSchema = new Schema({
  company_name: { type: String, required: true },
  company_email: { type: String, required: true },
  password: { type: String, required: true }, 
  address: { type: String },
  company_phone: { type: String },
  zip: { type: String },
  services: { type: String }
});

const Landscape = mongoose.model("Landscape", landscapeSchema);

module.exports = Landscape;
