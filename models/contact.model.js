// backend logic for contact database
const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  name: String,
  phone: String,
});

const contactModel = mongoose.model("Contact", contactSchema);

module.exports = contactModel;
