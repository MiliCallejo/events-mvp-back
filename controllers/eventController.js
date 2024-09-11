const Event = require('../models/event');

exports.createEvent = async (req, res) => {
  const { titulo, descripcionCorta, descripcionLarga, fechaHora, organizador, lugar, estado } = req.body;
  const event = await Event.create({ titulo, descripcionCorta, descripcionLarga, fechaHora, organizador, lugar, estado });
  res.json(event);
};

exports.updateEvent = async (req, res) => {
  const { id } = req.params;
  const event = await Event.findByPk(id);
  if (!event) return res.status(404).json({ error: 'Evento no encontrado' });

  const { titulo, descripcionCorta, descripcionLarga, fechaHora, organizador, lugar, estado } = req.body;
  event.update({ titulo, descripcionCorta, descripcionLarga, fechaHora, organizador, lugar, estado });
  res.json(event);
};

exports.getEvents = async (req, res) => {
  const { estado, fecha, titulo } = req.query;
  const whereClause = {};

  if (estado) whereClause.estado = estado;
  if (fecha) whereClause.fechaHora = { [Op.gte]: new Date(fecha) };
  if (titulo) whereClause.titulo = { [Op.like]: `%${titulo}%` };

  const events = await Event.findAll({ where: whereClause });
  res.json(events);
};
