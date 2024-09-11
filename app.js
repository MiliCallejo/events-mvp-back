const express = require('express');
const sequelize = require('./config/config');
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
const inscripcionRoutes = require('./routes/inscripcionRoutes');

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/eventos', eventRoutes);
app.use('/api/inscripciones', inscripcionRoutes);

sequelize.sync()
  .then(() => console.log('Base de datos sincronizada'))
  .catch(err => console.log('Error al sincronizar la base de datos', err));

module.exports = app;
