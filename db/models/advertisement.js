'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Advertisement extends Model {
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
  Advertisement.init({
    user_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    new_price: DataTypes.FLOAT,
    from: DataTypes.DATE,
    to: DataTypes.DATE,
    status: DataTypes.ENUM('active', 'disabled')
  }, {
    sequelize,
    modelName: 'Advertisement', 
    underscored: true
  });
  return Advertisement;
};