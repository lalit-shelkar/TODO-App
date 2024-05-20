
//creating server
const express = require('express');//require fun imports
const app = express();

//load config from env file 
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middle-ware to parse json req body
app.use(express.json()); //jiske dwara me body me se parse kar sakunga

//import routes for Todo API
const todoRoutes = require("./routes/todos");

//mount the Tode APIs routes
app.use("/api/v1",todoRoutes);  //localhost:3000/api/v1/createTodo


//live server on port 3000
app.listen(PORT,()=>{
    console.log("App is running successfully");
});

//connect to database
const dbConnect = require("./config/database");
dbConnect();

//default route
app.get("/",(req,res)=>{
    res.send(`<h1> This is Home Page</h1>`);
})