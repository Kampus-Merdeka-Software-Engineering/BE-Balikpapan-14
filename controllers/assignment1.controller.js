const {pool} = require('../config/database');
const assignmentSatuService= require('../services/assignment1.services');

async function getAllAssignmentSatu(req, res) {
    try {
      const assignment1 = await assignmentSatuService.getAllAssignmentSatu();
      res.status(200).json({
        message: "Successfully fetched all assignment",
        data: assignment1
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

async function createAssignmentSatu(req, res) {
    try {
      const createdAssignmentSatu = await assignmentSatuService.createAssignmentSatu(req.body);
      res.status(201).json({ createdAssignmentSatu });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

module.exports= {getAllAssignmentSatu, createAssignmentSatu}