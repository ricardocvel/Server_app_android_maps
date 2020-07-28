const express = require('express');
const app = express();


app.get('/', (request, response) => {
    return response.json({message: 'Hello Word and São José'});
});

app.listen(3333);