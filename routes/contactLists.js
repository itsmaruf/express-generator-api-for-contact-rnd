var express = require("express");
var router = express.Router();

/* GET contact listing. */
router.get("/", function (req, res, next) {
  const contact = [
    {
      id: 1,
      name: "John Doe",
      phone: "555-555-5555",
    },
  ];
  res.send(contact);
});

module.exports = router;
