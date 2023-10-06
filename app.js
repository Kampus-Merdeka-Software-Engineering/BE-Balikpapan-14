require('dotenv').config();
// file entrypoint, dimana nanti API bakal jalan
const express = require('express');
const cors = require('cors');
const { leaderboardRoute } = require('./routes/index.routes');
const { lessonsRoute } = require('./routes/lesson.routes');
const { profileRoute } = require('./routes/profile.routes');
const { assignmentSatuRoute } = require('./routes/assignment1.routes');
const { logger } = require('./middleware/logger');

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middleware buatan sendiri
app.use(logger)

// rute untuk leaderboard
app.use("/", leaderboardRoute)
app.use("/", lessonsRoute)
app.use('/', profileRoute)
app.use('/', assignmentSatuRoute)

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
  });
  

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

