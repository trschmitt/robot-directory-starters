const express = require('express');
const router = express.Router();


router.get('/:id', (req, res) => {

  let userData = data.users.find((el) => {
    return el.id == req.params.id;
  });

  console.log(userData);

  res.render('profile', userData)
})

module.exports = router;
