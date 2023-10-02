const {pool} = require('../config/database');

const getAllProfile = async(req, res) => {
    const connection= await pool.getConnection();
    const [rows] = await connection.query('SELECT*FROM profile');
    console.log(rows[0]);
    res.status(200).json({
        message: "Hello in page profile",
        data: rows[0]
    })
}

module.exports= {getAllProfile}