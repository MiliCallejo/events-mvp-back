const express = require('express');
const { createEvent, updateEvent, getEvents } = require('../controllers/eventController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createEvent);
router.put('/:id', authMiddleware, updateEvent);

router.get('/', getEvents);

module.exports = router;
