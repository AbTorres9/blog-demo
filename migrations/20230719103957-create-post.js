'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      postId: {
        type: Sequelize.STRING
      },
      pserId: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      summary: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.STRING
      },
      lastModified: {
        type: Sequelize.STRING
      },
      categoryId: {
        type: Sequelize.STRING
      },
      categoryName: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Posts');
  }
};