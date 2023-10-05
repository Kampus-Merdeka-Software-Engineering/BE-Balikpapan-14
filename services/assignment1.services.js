const {pool}= require('../config/database');

const getAllAssignmentSatu = async () => {
    const connection = await pool.getConnection()
    try {
        const assignmentSatu= await connection.query('SELECT*FROM assignment1');
        return assignmentSatu
    }catch (error) {
        console.log(error);
        return error
    } finally {
        connection.release()
    }
}

const createAssignmentSatu = async (assignmentSatu) => {
    const connection = await pool.getConnection()
    try {
        const createdAssignmentSatu= await connection.query('INSERT INTO assignment1 (assignment, deadline, date_modified, grade, status) VALUES (?, ?, ?, ?, ?)',
        [assignmentSatu.assignment, assignmentSatu.deadline, assignmentSatu.date_modified, assignmentSatu.grade, assignmentSatu.status]);
        return createdAssignmentSatu
    } catch (error) {
        return error
    } finally {
        connection.release()
    }
    }

const getAssignmentSatuById = async (id) => {
    const connection = await pool.getConnection()
    try {
        const [assignmentSatu] = await connection.query ('SELECT*FROM assignment1 WHERE id= ?', [id]);
        return assignmentSatu
    } catch (error) {
        return error
    } finally {
        connection.release()
    }
}

module.exports= {getAllAssignmentSatu, createAssignmentSatu, getAssignmentSatuById}