// backend logic for contact database
const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  name: String,
  phone: {
    type: String,
    unique: true,
  },
});

const contactModel = mongoose.model("Contact", contactSchema);

module.exports = contactModel;
