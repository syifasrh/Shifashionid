'use strict';
const fs = require('fs');
const { hashPass } = require('../helpers/bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let users = fs.readFileSync('./data/users.json', 'utf-8');

    users = JSON.parse(users);

    users.forEach(user => {
      user.createdAt = new Date()
      user.updatedAt = new Date()
      user.password = hashPass(user.password)
    });

    await queryInterface.bulkInsert("Users", users);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  }
};
