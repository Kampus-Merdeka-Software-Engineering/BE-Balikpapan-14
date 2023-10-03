const loginService = require('../services/login.services')

const getAllLogin = async (req,res) => {
    const login = await loginService.getAllLogin()
    res.status(200).json({
        message: "Sukses dalam mengambil data",
        data: login
    })
}

const createLogin = async (req,res) => {
    const createLogin = await loginService.createLogin(req,body)
    req.status(201).json({
        message: "Sukses menambah login",
        data: createLogin
    })
}

const getLoginById = async (req,res) => {
    const login = await loginService.getLoginById(req.params.id)
    if(!login) res.status(404).json({message:"login not found"})
    res.status(200).json({ 
        message: "Sukses dalam mengambil data",
        data: login
    })
}

module.exports={getAllLogin, createLogin, getLoginById}