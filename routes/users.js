const express = require('express');
const router = express.Router();

// @route POST api/users
// @desc Register a new user
// @access private
router.post('/', (req, res) => {
  res.send('Register a new user')
});

module.exports = router;