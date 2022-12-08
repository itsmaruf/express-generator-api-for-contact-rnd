var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const segmentModel = require("../models/segment.model");

/* GET segment listing. */
router.get("/", function (req, res, next) {
  // retrive all the segments from database
  segmentModel.find().exec(function (err, segments) {
    if (err) return next(err);
    res.status(200).json(segments);
  });
  // res.send("segment route is under construction");
});

router.post("/", function (req, res, next) {
  console.log(req.body);
  let newSegmentData = new segmentModel(req.body);

  newSegmentData.save(function (err, newSegment) {
    if (err) {
      return next(err);
    } else {
      res.send({
        status: "200",
        message: "segment info saved successfully",
        segmentObj: newSegment,
        success: true,
      });
    }
  });
});

module.exports = router;
