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
});

// insert new contact into database
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

// delete a contact from database by mongoDB objectId

router.delete("/:id", function (req, res, next) {
  console.log(req.params.id);
  let id = req.params.id;
  contactModel.findByIdAndRemove(id, function (err, deletedContact) {
    if (err) {
      return next(err);
    }
    res.status(200).json(deletedContact);
  });
});

// update a contact model by mongoDB objectId

router.put("/:id", function (req, res, next) {
  console.log(req.params.id);
  let id = req.params.id;
  const updatedValue = req.body;
  contactModel.findByIdAndUpdate(
    id,
    updatedValue,
    {
      new: true,
    },
    function (err, updatedContact) {
      if (err) {
        return next(err);
      }
      res.status(200).json(updatedContact);
    }
  );
});

module.exports = router;
