'use strict';
const Sequelize = require('sequelize')
const db = require('../index.js')

const User = db.define('users', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      isEmail: true
    },
    allowNull: false
  }
})

module.exports = User;
