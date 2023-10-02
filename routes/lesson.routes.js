const express = require('express');
const lessonsController = require('../controllers/lesson.controller')

const lessonsRoute = express.Router();

lessonsRoute.get('/', lessonsController.getAllLessons)
lessonsRoute.post('/', lessonsController.createLessons)
lessonsRoute.get('/:id', lessonsController.getLessonsById)

module.exports = { lessonsRoute }