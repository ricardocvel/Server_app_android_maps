const { index } = require("../models/utilis/PointSchema");

const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/ParseStringsAsArray')

module.exports = {
    async index(request, response) {
        //Buscar devs em um raiod e 10 KM
        //Filtrar poor tecnologia

        const{ latitude, longitude, techs} = request.query;
        
        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry:{
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });

        return response.json({devs, longitude, latitude});



    }
}