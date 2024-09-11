const Inscripcion = require('../models/inscripcion');
const Event = require('../models/event');

exports.inscribirse = async (req, res) => {
  const { userId } = req.user; 
  const { id } = req.params; 

  const event = await Event.findByPk(id);
  if (!event || event.estado !== 'publicado' || new Date(event.fechaHora) <= new Date()) {
    return res.status(400).json({ error: 'No puedes inscribirte a este evento' });
  }

  const inscripcion = await Inscripcion.create({ UserId: userId, EventId: id });
  res.json(inscripcion);
};

exports.getInscripciones = async (req, res) => {
  const { userId } = req.user;
  const { estado } = req.query; 

  const whereClause = { UserId: userId };
  if (estado === 'completados') {
    whereClause['$Event.fechaHora$'] = { [Op.lt]: new Date() };
  } else if (estado === 'activos') {
    whereClause['$Event.fechaHora$'] = { [Op.gte]: new Date() };
  }

  const inscripciones = await Inscripcion.findAll({
    where: whereClause,
    include: { model: Event }
  });
  res.json(inscripciones);
};
