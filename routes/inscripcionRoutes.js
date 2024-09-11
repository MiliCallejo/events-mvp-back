const express = require('express');
const { inscribirse, getInscripciones } = require('../controllers/inscripcionController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/:id/inscribirse', authMiddleware, inscribirse);

router.get('/mis-inscripciones', authMiddleware, getInscripciones);

module.exports = router;
