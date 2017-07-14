'use strict';
const Sequelize = require('sequelize')
const db = require('../index.js')

const Campus = db.define('campuses', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.TEXT
  }
})

module.exports = Campus;
