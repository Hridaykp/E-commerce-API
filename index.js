const express = require('express');
const Port  = process.env.Port|| 8000;
const dotenv = require('dotenv')

const db = require('./config/mongoose');
const products = require('./routes/products');
const NotFount = require('./middleware/not_find');

const app = express();
dotenv.config() ;


app.use(express.json());
app.use('/products', products);
app.use(NotFount);

//connected  to server
app.listen(Port, (err)=>{
    if(err){
        console.log(`There is an error ${err}`);
        return;
    }
    console.log(`Server running on port: ${Port}`)
});

db();