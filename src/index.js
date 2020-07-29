const express = require('express');
const mongoose = require('mongoose');
const routes = require('./rotes');

const app = express();

mongoose.connect('mongodb+srv://oministack:Abc12345@cluster0.yheu5.mongodb.net/week10?retryWrites=true&w=majority',
    {
     useNewUrlParser: true ,
     useUnifiedTopology: true,
    }
);

app.use(express.json());
app.use(routes);

app.listen(3333);


//Metodos  HTTP: get, post, put, delete

// TIPOS

// Query params: request.query ( Filtros, ordenação, paginação)  
// Route params: request.params (identifica um recurso na alteração ou renomeação)
// Body:

// MongoDB ( Não Relacional)