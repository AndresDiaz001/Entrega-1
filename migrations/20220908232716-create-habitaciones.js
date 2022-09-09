'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Habitaciones', {
      habitacion_numero: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Precio_por_Noche: {
        type: Sequelize.FLOAT
      },
      piso: {
        type: Sequelize.INTEGER
      },
      max_personas: {
        type: Sequelize.INTEGER
      },
      Tiene_Cama_Bebe: {
        type: Sequelize.BOOLEAN
      },
      Tiene_Ducha: {
        type: Sequelize.BOOLEAN
      },
      Tiene_Bano: {
        type: Sequelize.BOOLEAN
      },
      Tiene_Balcon: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Habitaciones');
  }
};