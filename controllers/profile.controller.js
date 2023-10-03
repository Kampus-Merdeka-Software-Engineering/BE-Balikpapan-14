const {pool} = require('../config/database');
const profileService= require('../services/profile.services');

const getAllProfile = async(req, res) => {
    const [rows] = await profileService.getAllProfile()
    res.status(200).json({
        message: "Sukses mengambil data profile",
        data: rows
    })
}

const createProfile = async(req, res) => {
    const createdProfile= await profileService.createProfile (req.body)
    res.status(201).json ({
        message: "Sukses menambah data profile",
        data: createdProfile
    })
}

module.exports= {getAllProfile, createProfile}