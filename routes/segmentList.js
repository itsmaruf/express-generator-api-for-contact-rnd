var express = require("express");
var router = express.Router();

/* GET contact listing. */
router.get("/", function (req, res, next) {
  const segmentLists = [
    {
      id: 1,
      segment: 100,
      contact: 200,
    },
  ];
  res.send(segmentLists);
});

module.exports = router;
