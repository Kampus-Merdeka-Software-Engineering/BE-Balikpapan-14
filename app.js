require('dotenv').config();
// file entrypoint, dimana nanti API bakal jalan
const express = require('express');
const cors = require('cors');
const { mahasiswaRoute } = require('./routes/mahasiswa.routes')
const { leaderboardRoute } = require('./routes/index.routes')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// rute untuk mahasiswa
// rute untuk campus
app.use("/mahasiswa", mahasiswaRoute)
app.use("/leaderboard", leaderboardRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})