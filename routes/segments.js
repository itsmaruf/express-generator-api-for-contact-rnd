var express = require("express");
var router = express.Router();

/* GET contact listing. */
router.get("/", function (req, res, next) {
  const segments = [
    {
      id: 1,
      segmentId: 1,
      contactId: 100,
    },
  ];
  res.send(segments);
});

module.exports = router;
