'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductRating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User)
      this.belongsTo(models.Product)
    }
  }
  ProductRating.init({
    user_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    description: DataTypes.STRING,
    rate: DataTypes.ENUM('1', '2', '3', '4', '5')
  }, {
    sequelize,
    modelName: 'ProductRating',
    underscored: true
  });
  return ProductRating;
};