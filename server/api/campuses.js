'use strict';

const router = require('express').Router();
const Campus = require('../../db/models/campus')
const httpError = require('../utils/HttpError');

router.param('id', function (req, res, next, id) {
  Campus.findById(id)
    .then(function (campus) {
      if (!campus) throw httpError(404);
      req.campus = campus;
      next();
      return null;
    })
    .catch(next);
})

router.get('/', function (req, res, next) {
  Campus.findAll({})
    .then(function (campuses) {
      res.json(campuses);
    })
    .catch(next);
})

router.post('/', function (req, res, next) {
  Campus.create(req.body)
    .then(function (campus) {
      res.status(201).json(campus);
    })
    .catch(next);
})

router.get('/:id', function (req, res, next) {
  Campus.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(function (campus) {
      res.json(campus)
    })
    .catch(next);
})

router.put('/:id', function (req, res, next) {
  req.campus.update(req.body)
    .then(function (campus) {
      res.json(campus);
    })
    .catch(next)
})

router.delete('/:id', function (req, res, next) {
  req.campus.destroy()
    .then(function () {
      res.status(204).end();
    })
    .catch(next);
})

module.exports = router;
