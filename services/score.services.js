const { prisma } = require('../config/prisma');

async function getAllScore() {
    try {
      const score = await prisma.score.findMany();
      return score;
    } catch (error) {
      console.log(error);
    }
  }

    async function createScore(score) {
        try {
          const createdScore = await prisma.score.create({
            data: {
                id: Number(score.id),
                nilai: Number(score.nilai),
                username: score.username,
            }
          })
          return createdScore;
        } catch (error) {
          throw new Error(error)
        }
      }
      
async function getScoreById(score) {
    try {
      const score = await prisma.score.findUnique({
        where: {
          id: Number(score)
        }
      })
      return score
    } catch (error) {
      throw new Error(error)
    }
  }

module.exports= {getAllScore, createScore, getScoreById}