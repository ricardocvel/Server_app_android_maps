const { Router } = require("express");
const axios = require('axios'); 
const Dev = require('./models/Dev');
const Devcontroler = require('./controlers/Devcontrolers')

const routes = Router();

//ROTAS
routes.get('/devs', Devcontroler.index);
routes.post('/devs',Devcontroler.store);

module.exports = routes;