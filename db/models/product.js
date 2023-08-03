'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.ProductRating)
      this.hasMany(models.ProductImage)
      this.hasMany(models.Advertisement)
      this.hasMany(models.InvoiceItem)
      this.belongsTo(models.Category)
      this.belongsTo(models.User)
      this.belongsTo(models.Supplier)
    }
  }
  Product.init({
    category_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    supplier_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
    underscored: true
  });
  return Product;
};