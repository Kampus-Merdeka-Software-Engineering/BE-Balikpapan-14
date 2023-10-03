const express= require('express');
const {pool}= require('../config/database');
const {getAllAssignmentSatu, createAssignmentSatu, getAssignmentSatuById}= require('../controllers/assignment1.controller');
const assignmentSatuRoute = express.Router();

assignmentSatuRoute.get('/assignment1', getAllAssignmentSatu)
assignmentSatuRoute.post('/assignment', createAssignmentSatu)
assignmentSatuRoute.get('/assigment1/:id', getAssignmentSatuById)

module.exports= {assignmentSatuRoute}