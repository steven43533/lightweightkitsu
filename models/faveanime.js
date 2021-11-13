'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class faveAnime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  faveAnime.init({
    name: DataTypes.STRING,
    synopsis: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    posterImage: DataTypes.STRING,
    favoriteCount: DataTypes.INTEGER,
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'faveAnime',
  });
  return faveAnime;
};