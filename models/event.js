const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Event = sequelize.define('Event', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcionCorta: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcionLarga: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  fechaHora: {
    type: DataTypes.DATE,
    allowNull: false
  },
  organizador: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lugar: {
    type: DataTypes.STRING,
    allowNull: false
  },
  estado: {
    type: DataTypes.ENUM('borrador', 'publicado'),
    defaultValue: 'borrador'
  }
});

module.exports = Event;
