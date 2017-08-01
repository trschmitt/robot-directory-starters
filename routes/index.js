const express = require('express');
const router = express.Router();
const user = require("../models/user");

router.get("/", (req, res) => {
  user.findAll((data) => {
    res.render('index', {user: data})
  })
})

module.exports = router;
