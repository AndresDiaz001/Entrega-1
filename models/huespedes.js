'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Huespedes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Huespedes.init({
    Nombres: DataTypes.STRING,
    Apellidos: DataTypes.STRING,
    Telefono: DataTypes.INTEGER,
    Correo: DataTypes.STRING,
    Direccion: DataTypes.STRING,
    Ciudad: DataTypes.STRING,
    Pais: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Huespedes',
  });
  return Huespedes;
};