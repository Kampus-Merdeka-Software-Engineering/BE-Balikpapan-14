const express= require('express');
const {pool}= require('../config/database');
const {getAllAssignmentSatu, createAssignmentSatu}= require('../controllers/assignment1.controller');
const assignmentSatuRoute = express.Router();

assignmentSatuRoute.get('/assignment1', getAllAssignmentSatu)
assignmentSatuRoute.post('/assignment1', createAssignmentSatu)

module.exports= {assignmentSatuRoute}