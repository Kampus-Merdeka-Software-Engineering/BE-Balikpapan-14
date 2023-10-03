const {pool}=require('../config/database');
const {prisma}=require('../config/prisma');

const getAllLogin = async () => {
    //const connection = await pool.getConnection()
    try {
        const login = prisma.login.findMany()
        return login
    } catch(error){
        console.error(error)
        return error
    }
}

const createLogin = async (login) =>{
    const connection = await pool.getLogin()
    try{
        const createLogin = await connection.query('INSERT INTO LOGIN (name, password) VALUES (?,?)', [login.name, login.password]);
        return createdLogin
    } catch (error) {
        return error
    } finally {
        connection.release()
    }
}

const getLoginById = async (id) => {
    const connection = await pool.getConnection()
    try {
        const [login] = await connection.query('SELECT * FROM LOGIN WHERE id = ?', [id]);
        return login
    } catch (error) {
        return error
    } finally {
        connection.release()
    }
}

module.exports = {getAllLogin, createLogin, getLoginById}