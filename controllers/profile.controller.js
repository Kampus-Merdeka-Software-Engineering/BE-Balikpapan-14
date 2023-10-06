const profileService= require('../services/profile.services');

// const getAllProfile = async(req, res) => {
//     const profile = await profileService.getAllProfile()
//     res.status(200).json({
//         message: "Sukses mengambil data profile",
//         data: profile
//     })
// }

async function getAllProfile(req, res) {
    try {
      const profile = await profileService.getAllProfile();
      res.status(200).json({
        message: "Successfully fetched all profile",
        data: profile
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

// const createProfile = async(req, res) => {
//     const createdProfile= await profileService.createProfile (req.body)
//     res.status(201).json ({
//         message: "Sukses menambah data profile",
//         data: createdProfile
//     })
// }

async function createProfile(req, res) {
    try {
      const createdProfile = await profileService.createProfile(req.body);
      res.status(201).json({ createdProfile });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

// const getProfileById = async (req, res) => {
//     const [profile] = await profileService.getProfileById(req.params.id)
//     if (!profile) res.status(404).json({message: "Data tidak ditemukan"})
//     res.status(200).json({
//         message: "Sukses mengambil data profile by id",
//         data: profile
//     })
// }

async function getProfileById(req, res) {
    const { profile } = req.params;
    try {
      const profile = await profileService.getProfileById(profile);
      if (!profile) {
        return res.status(404).json({ error: 'profile not found' });
      }
      res.status(200).json({
        message: "Successfully fetched profile",
        data: profile
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

module.exports= {getAllProfile, createProfile, getProfileById}