const express= require('express');
const {pool}= require('../config/database');
const {getAllLessons, createLessons}= require('../controllers/lesson.controller');
const lessonsRoute = express.Router();

lessonsRoute.get('/lessons', getAllLessons)
lessonsRoute.post('/lessons', createLessons)

module.exports= {lessonsRoute}