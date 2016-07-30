'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    var models = require('../models');
    return models.User.bulkCreate([
      { username: 'jdoe', name: 'John Doe' },
      { username: 'test', name: 'Test User' }
    ]);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
