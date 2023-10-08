const { prisma } = require('../config/prisma');

async function getAllProfile() {
    try {
      const profile = await prisma.profile.findMany();
      return profile;
    } catch (error) {
      console.log(error);
    }
  }

    async function createProfile(profile) {
        try {
          const createdProfile = await prisma.profile.create({
            data: {
                full_name: profile.full_name,
                nisn: profile.nisn,
                birthdate: profile.birthdate,
                email: profile.email,
            }
          })
          return createdProfile;
        } catch (error) {
          throw new Error(error)
        }
      }
      
async function getProfileById(profile) {
    try {
      const profile = await prisma.profile.findUnique({
        where: {
          id: Number(profile)
        }
      })
      return profile
    } catch (error) {
      throw new Error(error)
    }
  }

module.exports= {getAllProfile, createProfile, getProfileById}