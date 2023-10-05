const {pool} = require('../config/database');
const lessonsService= require('../services/lesson.service');

async function getAllLessons(req, res) {
    try {
      const lessons = await lessonsService.getAllLessons();
      res.status(200).json({
        message: "Successfully fetched all lessons",
        data: lessons
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

async function createLessons(req, res) {
    try {
      const createdLessons = await lessonsService.createLessons(req.body);
      res.status(201).json({ createdLessons });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

module.exports= {getAllLessons, createLessons}