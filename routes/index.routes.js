const express = require('express');
const leaderboardController = require('../controllers/index.controller')

const leaderboardRoute = express.Router();

leaderboardRoute.get('/', leaderboardController.getAllLeaderboard)
leaderboardRoute.post('/', leaderboardController.createLeaderboard)
leaderboardRoute.get('/:id', leaderboardController.getLeaderboardById)

module.exports = { leaderboardRoute }