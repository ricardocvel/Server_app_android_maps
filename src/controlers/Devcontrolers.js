const axios = require('axios');
const Dev = require('../models/Dev');

// index, show, update, destroy

module.exports = {

    async index(request, response){
        const devs = await Dev.find();

        return response.json(devs);
    },


    async store(request, response){
        //obtem do dado
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username});
        if (!dev){
                
        //await identifica a função assincrona + async
        const apiresponse = await axios.get(`https://api.github.com/users/${github_username}`);
        
        const naobio = 'Nao possui bio';
        let {name = login, avatar_url, bio = naobio} = apiresponse.data;
        if (!bio){
            bio = naobio;
        }
    
        const techsArray = techs.split(',').map(tech => tech.trim());
    
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude]
        };
    
        dev = await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techsArray,
            location,
        })
    
        console.log(name, avatar_url, bio, github_username);

        }
    
        return response.json(dev);
    }

};


