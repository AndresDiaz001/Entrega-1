'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Habitaciones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Habitaciones.init({
    Precio_por_Noche: DataTypes.FLOAT,
    piso: DataTypes.INTEGER,
    max_personas: DataTypes.INTEGER,
    Tiene_Cama_Bebe: DataTypes.BOOLEAN,
    Tiene_Ducha: DataTypes.BOOLEAN,
    Tiene_Bano: DataTypes.BOOLEAN,
    Tiene_Balcon: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Habitaciones',
  });
  return Habitaciones;
};