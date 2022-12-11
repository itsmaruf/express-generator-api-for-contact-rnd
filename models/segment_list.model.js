const mongoose = require("mongoose");
const { Schema } = mongoose;

const SegmentListSchema = mongoose.Schema({
  segment: { type: Schema.Types.ObjectId, ref: "segment" },
  contact: { type: Schema.Types.ObjectId, ref: "contact" },
});

const segmentListModel = mongoose.model("segmentList", SegmentListSchema);

module.exports = segmentListModel;
