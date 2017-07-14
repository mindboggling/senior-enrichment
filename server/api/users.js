'use strict';

const router = require('express').Router();
const User = require('../../db/models/user');
const httpError = require('../utils/HttpError');

router.param('id', function (req, res, next, id) {
  User.findById(id)
  .then(function (user) {
    if (!user) throw httpError(404);
    req.requestedUser = user;
    next();
    return null;
  })
  .catch(next);
})

router.get('/', function (req, res, next) {
  User.findAll({})
  .then(function (users) {
    res.json(users);
  })
  .catch(next);
})

router.post('/', function (req, res, next) {
  User.create(req.body)
  .then(function (user) {
    res.status(201).json(user);
  })
  .catch(next);
})

module.exports = router;
