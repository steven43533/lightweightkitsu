'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wantToWatch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.wantToWatch.belongsTo(models.user)
    }
  };
  wantToWatch.init({
    name: DataTypes.STRING,
    synopsis: DataTypes.STRING,
    posterImage: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    animeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'wantToWatch',
  });
  return wantToWatch;
};