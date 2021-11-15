'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.changeColumn(
      'wantToWatches',
      'synopsis', {
        type: Sequelize.TEXT
      }
    )},

  down: async (queryInterface, Sequelize) => {
    queryInterface.changeColumn(
      'wantToWatches',
      'synopsis', {
        type: Sequelize.STRING
      }
  
    )}
};
