'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.ProductRating)
      this.hasMany(models.MonthlyExpenses)
      this.hasMany(models.Advertisement)
      // this.hasMany(models.Productrating)
      this.hasMany(models.Invoice)
      this.hasMany(models.Product)
    }
  }
  User.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
    gender: DataTypes.ENUM('male', 'female'),
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    description: DataTypes.STRING,
    role: DataTypes.ENUM('admin', 'store manager', 'advertisement manager', 'user'),
    status: DataTypes.ENUM('active', 'inactive')
  }, {
    sequelize,
    modelName: 'User',
    underscored: true
  });
  return User;
};