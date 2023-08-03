'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Advertisements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {model:"users",key:"id"}, 
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: {model:"products",key:"id"}, 
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      
      },
      new_price: {
        type: Sequelize.FLOAT
      },
      from: {
        type: Sequelize.DATE
      },
      to: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.ENUM('active', 'disabled')
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Advertisements');
  }
};