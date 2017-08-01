const express = require('express');
const router = express.Router();
const user = require("../models/user");


router.get('/:id', (req, res) => {
  const userById = user.findByUserID(req.params.id)
  res.render('profile', userById)
})

module.exports = router;
