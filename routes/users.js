const express = require('express');
const router = express.Router();
const user = require("../models/user");

router.get('/:id', (req, res) => {
  user.findById(parseInt(req.params.id), (data) => {
    res.render('profile', data);
  })
})

module.exports = router;
