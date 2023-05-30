//import express
var express = require("express");
var router = express.Router();
// create erouter object 

//configure middleware
router.get("/", (req, res, next) => {
  res.render("about", {
    authorName: "Dhruvin",
    email: "notarealemail@hoo.com",
  });
});

module.exports = router;
