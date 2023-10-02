const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "1234",
    database: process.env.DB_NAME || "terraceofdream",
    // DB_URI= mysql://root:@localhost:3306/terraceofdream
    // uri: process.env.DB_URI,
})

module.exports= {pool}