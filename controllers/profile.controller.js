const profileService= require('../services/profile.services');

const getAllProfile = async(req, res) => {
    const profile = await profileService.getAllProfile()
    res.status(200).json({
        message: "Sukses mengambil data profile",
        data: profile
    })
}

const createProfile = async(req, res) => {
    const createdProfile= await profileService.createProfile (req.body)
    res.status(201).json ({
        message: "Sukses menambah data profile",
        data: createdProfile
    })
}

const getProfileById = async (req, res) => {
    const [profile] = await profileService.getProfileById(req.params.id)
    if (!profile) res.status(404).json({message: "Data tidak ditemukan"})
    res.status(200).json({
        message: "Sukses mengambil data profile by id",
        data: profile
    })
}

module.exports= {getAllProfile, createProfile, getProfileById}