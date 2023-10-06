const {pool}= require('../config/database');
const { prisma } = require('../config/prisma');

async function getAllLogin() {
    try {
      const login = await prisma.login.findMany();
      return login;
    } catch (error) {
      console.log(error);
    }
  }

  async function createLogin(login) {
    try {
      const createdLogin = await prisma.login.create({
        data: {
            email: login.email,
            password: login.password,
        }
      })
      return createdLogin;
    } catch (error) {
      throw new Error(error)
    }
  }

  async function getLoginById(login) {
    try {
      const login = await prisma.login.findUnique({
        where: {
          id: Number(login)
        }
      })
      return login
    } catch (error) {
      throw new Error(error)
    }
  }

module.exports= {getAllLogin, createLogin, getLoginById}