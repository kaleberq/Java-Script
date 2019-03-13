'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();
const router = express.Router();

//Connecta ao banco
mongoose.connect('mongodb://kalebe:Aquariofilia1996@crud-shard-00-00-myzxy.gcp.mongodb.net:27017,crud-shard-00-01-myzxy.gcp.mongodb.net:27017,crud-shard-00-02-myzxy.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Crud-shard-0&authSource=admin&retryWrites=true');

// Carrega os Models
const Product = require('./models/product');

// Carrega as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: false 
}));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;