// backend logic for segment database
const mongoose = require("mongoose");

const segmentSchema = mongoose.Schema({
  name: String,
});

const segmentModel = mongoose.model("segment", segmentSchema);

module.exports = segmentModel;
