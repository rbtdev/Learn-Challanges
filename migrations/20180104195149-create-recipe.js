'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Recipes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      items: {
        type: Sequelize.INTEGER
      },
      time: {
        type: Sequelize.INTEGER
    },
      instructions: {
        type: Sequelize.STRING
      },
      serves: {
        type: Sequelize.INTEGER
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
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Recipes');
  }
};
