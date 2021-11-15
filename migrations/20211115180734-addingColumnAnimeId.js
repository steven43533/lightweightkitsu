'use strict';

const { sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'faveAnimes',
      'animeId',
      Sequelize.INTEGER)
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
      'faveAnimes',
      'animeId',
    )
  }
};
