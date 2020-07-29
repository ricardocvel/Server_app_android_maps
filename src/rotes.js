const { Router } = require("express");
const axios = require('axios'); 

const routes = Router();

routes.post('/devs', async (request, response) => {
    const { github_username } = request.body;

    const apiresponse = await axios.get(`https://api.github.com/users/${github_username}`);
    
    console.log(apiresponse.data);

    return response.json({message: 'teste'});
});

module.exports = routes;