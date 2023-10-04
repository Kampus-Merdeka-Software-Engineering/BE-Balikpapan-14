const {pool}= require('../config/database');

const getAllProfile = async () => {
    const connection = await pool.getConnection()
    try {
        const [profile]= await connection.query('SELECT*FROM profile');
        return profile
    }catch (error) {
        console.log(error);
        return error
    } finally {
        connection.release()
    }
}

const createProfile = async (profile) => {
    const connection = await pool.getConnection()
    try {
        const createdProfile= await connection.query('INSERT INTO profile(full_name, nisn, birthdate, email) VALUES (?, ?, ?, ?)',
        [profile.full_name, profile.nisn, profile.birthdate, profile.email]);
        return createdProfile
    } catch (error) {
        return error
    } finally {
        connection.release()
    }
    }

const getProfileById = async (id) => {
    const connection = await pool.getConnection()
    try {
        const [profile] = await connection.query ('SELECT*FROM profile WHERE id= ?', [id]);
        return profile
    } catch (error) {
        return error
    } finally {
        connection.release()
    }
}

module.exports= {getAllProfile, createProfile, getProfileById}