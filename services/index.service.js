const { pool } = require('../config/database');
const { prisma } = require('../config/prisma');

const getAllLeaderboard = async () => {
    // const connection = await pool.getConnection()
    try {
        const leaderboard = prisma.leaderboard.findMany()
        return leaderboard
    } catch (error){
        console.error(error)
        return error
    }
}

const createLeaderboard = async (leaderboard) => {
    const connection = await pool.getConnection()
    try {
        const createdLeaderboard = await connection.query('INSERT INTO LEADERBOARD (id, nama, nilai) VALUES (?, ?, ?)', [leaderboard.id, leaderboard.nama, leaderboard.nilai]);
        return createdLeaderboard
    } catch (error) {
        return error
    } finally {
        connection.release()
    }
}

const getLeaderboardById = async (id) => {
    const connection = await pool.getConnection()
    try {
        const [leaderboard] = await connection.query('SELECT * FROM  LEADERBOARD WHERE id = ?', [id]);
        return leaderboard
    } catch (error) {
        return error
    } finally {
        connection.release()
    }
}

module.exports = { getAllLeaderboard, createLeaderboard, getLeaderboardById }