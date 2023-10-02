const leaderboardService = require('../services/index.service')

const getAllLeaderboard = async (req,res) => {
    const leaderboard = await leaderboardService.getAllLeaderboard()
    res.status(200).json({
        message: "Sukses dalam mengambil data",
        data : leaderboard
    })
}

const createLeaderboard = async (req, res) => {
    const createdLeaderboard = await leaderboardService.createLeaderboard(req.body)
    res.status(201).json({
        message: "Sukses menambah leaderboard",
        data: createdLeaderboard
    })
}

const getLeaderboardById = async (req, res) => {
    const leaderboard = await leaderboardService.getLeaderboardById (req.params.id)
    if (!leaderboard) res.status(404).json({ message: "leaderboard tidak ditemukan"})
    res.status(200).json({
        message: "Sukses dalam mengambil data",
        data: leaderboard
    })
}

module.exports = { getAllLeaderboard, createLeaderboard, getLeaderboardById }