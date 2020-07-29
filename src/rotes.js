const { Router } = require("express");
const axios = require('axios'); 
const Dev = require('./models/Dev');

const routes = Router();

routes.post('/devs', async (request, response) => {
    //obtem do dado
    const { github_username, techs } = request.body;

    //await identifica a função assincrona + async
    const apiresponse = await axios.get(`https://api.github.com/users/${github_username}`);
    
    const naobio = 'Nao possui bio';
    let {name = login, avatar_url, bio = naobio} = apiresponse.data;
    if (!bio){
        bio = naobio;
    }

    const techsArray = techs.split(',').map(tech => techs.trim());

    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        tech: techsArray,
    })

    console.log(name, avatar_url, bio, github_username);

    return response.json(dev);
});

module.exports = routes;