var express = require("express");
var router = express.Router();

const mongoose = require("mongoose");

const segmentListModel = require("../models/segment_list.model");

/* GET segment listing. */

router.get("/", function (req, res, next) {
  // retrive all the segmentLists from database
  segmentListModel
    .find()
    .populate("contact")
    .populate("segment")
    .exec(function (err, segments) {
      if (err) return next(err);
      res.status(200).json(segments);
    });
});

// post segment listing
router.post("/", function (req, res, next) {
  console.log(req.body);

  let newSegmentListData = new segmentListModel(req.body);

  newSegmentListData.save(function (err, newSegmentList) {
    if (err) {
      return next(err);
    } else {
      res.send({
        status: "200",
        message: "segmentList info saved successfully",
        segmentListObj: newSegmentList,
        success: true,
      });
    }
  });
});

module.exports = router;
