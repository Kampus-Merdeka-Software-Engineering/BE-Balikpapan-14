const loginService= require('../services/login.services');

async function getAllLogin(req, res) {
    try {
      const login = await loginService.getAllLogin();
      res.status(200).json({
        message: "Successfully fetched all login",
        data: login
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async function createLogin(req, res) {
    try {
      const createdLogin = await loginService.createLogin(req.body);
      res.status(201).json({ createdLogin });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async function getLoginById(req, res) {
    const { login } = req.params;
    try {
      const login = await loginService.getLoginById(login);
      if (!login) {
        return res.status(404).json({ error: 'login not found' });
      }
      res.status(200).json({
        message: "Successfully fetched login",
        data: login
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

module.exports= {getAllLogin, createLogin, getLoginById}