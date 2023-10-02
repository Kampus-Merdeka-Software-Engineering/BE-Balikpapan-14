const { pool } = require('../config/database');
const { prisma } = require('../config/prisma');

const getAllLessons = async () => {
    // const connection = await pool.getConnection()
    try {
        const lessons = prisma.lessons.findMany()
        return lessons
    } catch (error){
        console.error(error)
        return error
    }
}

const createLessons = async (lessons) => {
    const connection = await pool.getConnection()
    try {
        const createdLessons = await connection.query('INSERT INTO LESSONS (img, nama) VALUES (?, ?)', [lessons.img, lessons.nama]);
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
        const [lessons] = await connection.query('SELECT * FROM  LESSONS WHERE id = ?', [id]);
        return lessons
    } catch (error) {
        return error
    } finally {
        connection.release()
    }
}

module.exports = { getAllLessons, createLessons, getLessonsById }