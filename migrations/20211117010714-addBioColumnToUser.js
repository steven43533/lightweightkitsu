'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'users',
      'biography',
      Sequelize.TEXT)
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
      'users',
      'biography',
    )
  }
};
