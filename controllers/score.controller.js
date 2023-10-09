const scoreService= require('../services/score.services');

async function getAllScore(req, res) {
    try {
      const score = await scoreService.getAllScore();
      res.status(200).json({
        message: "Successfully fetched all score",
        data: score
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

async function createScore(req, res) {
    try {
      const createdScore = await scoreService.createScore(req.body);
      res.status(201).json({ createdScore });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

async function getScoreById(req, res) {
    const { score } = req.params;
    try {
      const score = await scoreService.getScoreById(score);
      if (!score) {
        return res.status(404).json({ error: 'score not found' });
      }
      res.status(200).json({
        message: "Successfully fetched score",
        data: score
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

module.exports= {getAllScore, createScore, getScoreById}