const mysql = require ('mysql2/promise');

const pool = mysql.createPool({
    uri: process.env.DB_URI,
})

module.exports = { pool }
