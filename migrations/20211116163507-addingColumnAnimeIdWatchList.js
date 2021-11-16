'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'wantToWatches',
      'animeId',
      Sequelize.INTEGER)
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
      'wantToWatches',
      'animeId',
    )
  }
};
