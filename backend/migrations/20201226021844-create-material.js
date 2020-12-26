'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Materials', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      teacherId: {
		type: Sequelize.INTEGER,
		references: {
			model: 'Teachers',
			key: 'id'
		},
		onUpdate: 'cascade',
		onDelete: 'cascade'
      },
      materialName: {
        type: Sequelize.STRING
      },
      document: {
        type: Sequelize.TEXT
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Materials');
  }
};
