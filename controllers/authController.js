const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { JWT_SECRET } = process.env;

exports.register = async (req, res) => {
  const { nombre, email, password, rol } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ nombre, email, password: hashedPassword, rol });

  res.json(user);
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });

  if (!user) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(400).json({ error: 'Contraseña incorrecta' });
  }

  const token = jwt.sign({ userId: user.id, rol: user.rol }, JWT_SECRET);
  res.json({ token });
};
