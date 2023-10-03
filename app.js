require('dotenv').config();
// file entrypoint, dimana nanti API bakal jalan
const express = require('express');
const cors = require('cors');
const { leaderboardRoute } = require('./routes/index.routes');
const { lessonsRoute } = require('./routes/lesson.routes');
const { profileRoute } = require('./routes/profile.routes');
const { assignmentSatuRoute } = require('./routes/assignment1.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// rute untuk leaderboard
app.use("/leaderboard", leaderboardRoute)
app.use("/", lessonsRoute)
app.use('/', profileRoute)
app.use('/', assignmentSatuRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

