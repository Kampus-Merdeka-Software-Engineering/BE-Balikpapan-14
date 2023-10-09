const express= require('express');
const {pool}= require('../config/database');
const {getAllLogin, createLogin, getLoginById}= require('../controllers/login.controller');
const loginRoute = express.Router();

loginRoute.get('/login', getAllLogin)
loginRoute.post('/login', createLogin)
loginRoute.get('/login/:id', getLoginById)

module.exports= {loginRoute}