'use strict';

const { Model } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProductRatings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {model:'users',key:'id'}, 
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: {model:'products',key:'id'}, 
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      
      },
      description: {
        type: Sequelize.STRING
      },
      rate: {
        type: Sequelize.ENUM('1', '2', '3', '4', '5')
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
    await queryInterface.dropTable('ProductRatings');
  }
};