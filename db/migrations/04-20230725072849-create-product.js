'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: {model:'categories',key:'id'}, 
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {model:'users',key:'id'}, 
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      
      },
      supplier_id: {
        type: Sequelize.INTEGER,
        references: {model:'suppliers',key:'id'}, 
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      quantity: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Products');
  }
};