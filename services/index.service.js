// const {pool}= require('../config/database');
const { prisma } = require('../config/prisma');

async function getAllLeaderboard() {
    try {
      const leaderboard = await prisma.leaderboard.findMany();
      return leaderboard;
    } catch (error) {
      console.log(error);
    }
  }

    async function createLeaderboard(leaderboard) {
        try {
          const createdLeaderboard = await prisma.leaderboard.create({
            data: {
                id: leaderboard.id,
                nama: leaderboard.nama,
                nilai: leaderboard.nilai,
            }
          })
          return createdLeaderboard;
        } catch (error) {
          throw new Error(error)
        }
      }

module.exports= {getAllLeaderboard, createLeaderboard}