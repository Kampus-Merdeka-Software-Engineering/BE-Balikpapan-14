const express= require('express');
const {pool}= require('../config/database');
const {getAllScore, getScoreById}= require('../controllers/score.controller');
const {createScore}= require('../controllers/score.controller');
const scoreRoute = express.Router();

scoreRoute.get('/score', getAllScore)
scoreRoute.post('/score', createScore)
scoreRoute.get('/score/:id', getScoreById)

module.exports= {scoreRoute}