
const mongoose = require("mongoose");

require("dotenv").config();

const DATABASE_URL = process.env.DATABASE_URL;//to use env install npm i dotenv

//connecting index.js to databse//connection call retirns promise 
const dbConnect = ()=>{
    mongoose.connect(DATABASE_URL,{
        useNewurlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{console.log("db connection establish successfully")})
    .catch((error)=>{
        console.log("error occur while db connection"+error);
        process.exit(1);
    });
}

module.exports = dbConnect;