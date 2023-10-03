const express= require('express');
const{pool}=require('../config/database')
const{getAllLogin}= require('../controllers/login.controller');
const loginRoute= express.Router();

loginRoute.get('/login', getAllLogin)

module.exports={loginRoute}