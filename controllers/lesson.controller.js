const{pool}= require('../config/database');

const getAllLessons = async (req, res) => {
    const connection= await pool.getConnection();
    const [rows]= await connection.query('SELECT*FROM lessons');
    console.log(rows[0]);
    res.status(200).json ({
        message: 'Hello World!!',
        data: rows[0]
    })
}

module.exports= {getAllLessons}