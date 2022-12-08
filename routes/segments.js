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

// add new segment to database
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

// delete segment by id

router.delete("/:id", function (req, res, next) {
  console.log(req.params.id);
  let id = req.params.id;
  segmentModel.findByIdAndRemove(id, function (err, deletedSegment) {
    if (err) {
      return next(err);
    }
    res.status(200).json(deletedSegment);
  });
});


module.exports = router;
