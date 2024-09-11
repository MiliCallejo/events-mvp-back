const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const User = require('./user');
const Event = require('./event');

const Inscripcion = sequelize.define('Inscripcion', {
  fechaInscripcion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
});

Inscripcion.belongsTo(User);
Inscripcion.belongsTo(Event);

module.exports = Inscripcion;
