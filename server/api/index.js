'use strict';

const router = require('express').Router();
module.exports = router;

router.use('/hello', require('./api'));

//page not found
router.use(function(req, res) {
  res.status(404).end();
});
