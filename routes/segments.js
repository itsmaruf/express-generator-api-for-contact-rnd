var express = require("express");
var router = express.Router();

/* GET contact listing. */
router.get("/", function (req, res, next) {
  const segments = [
    {
      id: 1,
      segment: 1,
      contact: 100,
    },
  ];
  res.send(segments);
});

module.exports = router;
