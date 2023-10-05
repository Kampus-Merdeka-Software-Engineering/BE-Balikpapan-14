// const {pool}= require('../config/database');
const { prisma } = require('../config/prisma');

// const getAllProfile = async () => {
//     const connection = await pool.getConnection()
//     try {
//         const [profile]= await connection.query('SELECT*FROM profile');
//         return profile
//     }catch (error) {
//         console.log(error);
//         return error
//     } finally {
//         connection.release()
//     }
// }

async function getAllProfile() {
    try {
      const profile = await prisma.profile.findMany();
      return profile;
    } catch (error) {
      console.log(error);
    }
  }

// const createProfile = async (profile) => {
//     const connection = await pool.getConnection()
//     try {
//         const createdProfile= await connection.query('INSERT INTO profile(full_name, nisn, birthdate, email) VALUES (?, ?, ?, ?)',
//         [profile.full_name, profile.nisn, profile.birthdate, profile.email]);
//         return createdProfile
//     } catch (error) {
//         return error
//     } finally {
//         connection.release()
//     }
//     }

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

// const getProfileById = async (id) => {
//     const connection = await pool.getConnection()
//     try {
//         const [profile] = await connection.query ('SELECT*FROM profile WHERE id= ?', [id]);
//         return profile
//     } catch (error) {
//         return error
//     } finally {
//         connection.release()
//     }
// }

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