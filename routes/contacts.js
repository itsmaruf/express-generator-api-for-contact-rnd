var express = require("express");
var router = express.Router();

/* GET contact listing. */
router.get("/", function (req, res, next) {
  res.send("testing contact list 2");
});

module.exports = router;
