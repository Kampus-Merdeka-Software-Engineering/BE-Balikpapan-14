const express= require('express');
const {pool}= require('../config/database');
const {getAllProfile, getProfileById}= require('../controllers/profile.controller');
const {createProfile}= require('../controllers/profile.controller');
const profileRoute = express.Router();

profileRoute.get('/profile', getAllProfile)
profileRoute.post('/profile', createProfile)
profileRoute.get('/profile/:id', getProfileById)

module.exports= {profileRoute}