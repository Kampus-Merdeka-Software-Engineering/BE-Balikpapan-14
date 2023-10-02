const express= require('express');
const {pool}= require('../config/database');
const {getAllProfile}= require('../controllers/profile.controller');
const profileRoute = express.Router();

profileRoute.get('/profile', getAllProfile)

module.exports= {profileRoute}