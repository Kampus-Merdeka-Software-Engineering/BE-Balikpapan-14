require('dotenv').config();
const express = require('express');
const {pool} = require('./config/database')
const app = express();
const {lessonsRoute}= require('./routes/lesson.routes');
const { profileRoute } = require('./routes/profile.routes');

const PORT= process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Route untuk lessons
app.use('/', lessonsRoute)
// Route untuk profile
app.use('/', profileRoute)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})