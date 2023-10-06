const {pool} = require('../config/database');
const leaderboardService= require('../services/index.service');

async function getAllLeaderboard(req, res) {
    try {
      const leaderboard = await leaderboardService.getAllLeaderboard();
      res.status(200).json({
        message: "Successfully fetched all leaderboard",
        data: leaderboard
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

async function createLeaderboard(req, res) {
    try {
      const createdLeaderboard = await leaderboardService.createLeaderboard(req.body);
      res.status(201).json({ createdLeaderboard });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

module.exports= {getAllLeaderboard, createLeaderboard}