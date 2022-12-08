var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const contactModel = require("../models/contact.model");

/* GET contact listing. */
router.get("/", function (req, res, next) {
  // retrive all the contacts from database
  contactModel.find().exec(function (err, contacts) {
    if (err) return next(err);
    res.status(200).json(contacts);
  });
  // res.send("contact route is under construction");
});

router.post("/", function (req, res, next) {
  console.log(req.body);
  let newContactData = new contactModel(req.body);

  newContactData.save(function (err, newContact) {
    if (err) {
      return next(err);
    } else {
      res.send({
        status: "200",
        message: "contact info saved successfully",
        contactObj: newContact,
        success: true,
      });
    }
  });
});

module.exports = router;
