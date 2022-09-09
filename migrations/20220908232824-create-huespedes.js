'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Huespedes', {
      huesped_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Nombres: {
        type: Sequelize.STRING
      },
      Apellidos: {
        type: Sequelize.STRING
      },
      Telefono: {
        type: Sequelize.INTEGER
      },
      Correo: {
        type: Sequelize.STRING
      },
      Direccion: {
        type: Sequelize.STRING
      },
      Ciudad: {
        type: Sequelize.STRING
      },
      Pais: {
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
    await queryInterface.dropTable('Huespedes');
  }
};