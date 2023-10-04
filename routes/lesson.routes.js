const express= require('express');
const {pool}= require('../config/database');
const {getAllLessons, createLessons, getLessonsById}= require('../controllers/lesson.controller');
const lessonsRoute = express.Router();

lessonsRoute.get('/lessons', getAllLessons)
lessonsRoute.post('/lessons', createLessons)
lessonsRoute.get('/lessons/:id', getLessonsById)

module.exports= {lessonsRoute}