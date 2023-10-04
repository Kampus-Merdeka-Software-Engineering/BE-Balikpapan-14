const { pool } = require('../config/database');
// const {prisma } = require('../config/prisma');

const getAllLessons = async () => {
    const connection = await pool.getConnection()
    try {
        const [lessons] = await connection.query('SELECT*FROM lessons');
        return lessons
    } catch (error){
        console.error(error)
        return error
    } finally {
        connection.release()
    }
}

const createLessons = async (lessons) => {
    const connection = await pool.getConnection()
    try {
        const createdLessons = await connection.query('INSERT INTO lessons (image, nama_mapel, module) VALUES (?, ?, ?)', 
        [lessons.image, lessons.nama_mapel, lessons.module]);
        return createdLessons
    } catch (error) {
        return error
    } finally {
        connection.release()
    }
}

const getLessonsById = async (id) => {
    const connection = await pool.getConnection()
    try {
        const [lessons] = await connection.query('SELECT * FROM lessons WHERE id = ?', [id]);
        return lessons
    } catch (error) {
        return error
    } finally {
        connection.release()
    }
}

module.exports = { getAllLessons, createLessons, getLessonsById }