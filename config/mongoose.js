const mongoose = require('mongoose');
//conecting to MongoDB
const db = () =>{
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true, useUnifiedTopology: true
    }).then(data => {
        if(data){
            console.log("Successfuly connected to MongoDb...");
        }
    }).catch(err=>{
        if(err){
            console.log(`There is an error to connecting db ${err}`)
        }
    })
}

module.exports = db;