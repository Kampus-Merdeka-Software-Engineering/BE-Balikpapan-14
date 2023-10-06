const express= require('express');
const {pool}= require('../config/database');
const {getAllLeaderboard, createLeaderboard}= require('../controllers/index.controller');
const leaderboardRoute = express.Router();

leaderboardRoute.get('/leaderboard', getAllLeaderboard)
leaderboardRoute.post('/leaderboard', createLeaderboard)

module.exports= {leaderboardRoute}