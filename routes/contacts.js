var express = require("express");
var router = express.Router();

/* GET contact listing. */
router.get("/", function (req, res, next) {
  res.send("fetching contacts list");
});

module.exports = router;
