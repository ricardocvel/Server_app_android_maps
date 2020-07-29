const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://oministack:Abc12345@cluster0.yheu5.mongodb.net/week10?retryWrites=true&w=majority',
    {
     useNewUrlParser: true ,
     useUnifiedTopology: true,
    }
);

app.use(express.json());


//Metodos  HTTP: get, post, put, delete

// TIPOS

// Query params: request.query ( Filtros, ordenação, paginação)  
// Route params: request.params (identifica um recurso na alteração ou renomeação)
// Body:

// MongoDB ( Não Relacional)

app.post('/users/:id', (request, response) => {
    console.log(request.body);
    return response.json({message: 'teste'});
});

app.listen(3333);