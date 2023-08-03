'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Supplier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Product)
    }
  }
  Supplier.init({
    name: DataTypes.STRING,
    commercial_number: DataTypes.STRING,
    image: DataTypes.STRING,
    birthday: DataTypes.DATE,
    gender: DataTypes.ENUM('male', 'female'),
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Supplier',
    underscored: true
  });
  return Supplier;
};