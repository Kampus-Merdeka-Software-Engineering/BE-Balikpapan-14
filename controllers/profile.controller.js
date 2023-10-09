const profileService= require('../services/profile.services');

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

async function createProfile(req, res) {
    try {
      const createdProfile = await profileService.createProfile(req.body);
      res.status(201).json({ createdProfile });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

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