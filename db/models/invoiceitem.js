'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InvoiceItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Product)
      this.belongsTo(models.Invoice)
    }
  }
  InvoiceItem.init({
    cart_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    unit_price: DataTypes.FLOAT,
    subtotal: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'InvoiceItem',
    underscored: true
  });
  return InvoiceItem;
};