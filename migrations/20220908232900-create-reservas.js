'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reservas', {
      reservas_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Inicio_Fecha: {
        type: Sequelize.DATE
      },
      Fin_Fecha: {
        type: Sequelize.DATE
      },
      huesped_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName: 'huespedes',
          },
          key: 'id'
        },
        allowNull:false,
        onDelete:'CASCADE',
        onUpdadate:'CASCADE'
      },
      huesped_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName: 'huespedes',
          },
          key: 'huesped_id'
        },
        allowNull:false,
        onDelete:'CASCADE',
        onUpdadate:'CASCADE'
      },
      habitacion_numero: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName: 'habitaciones',
          },
          key: 'habitacion_numero'
        },
        allowNull:false,
        onDelete:'CASCADE',
        onUpdadate:'CASCADE'
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
    await queryInterface.dropTable('Reservas');
  }
};