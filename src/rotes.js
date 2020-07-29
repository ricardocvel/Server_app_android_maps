const { Router } = require("express");
const Devcontroler = require('./controlers/Devcontrolers')
const SearchControler = require('./controlers/SearchControler')

const routes = Router();

//ROTAS
routes.get('/devs', Devcontroler.index);
routes.post('/devs',Devcontroler.store);

routes.get('/search',SearchControler.index );

module.exports = routes;