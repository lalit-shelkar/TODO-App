//routes are use to map path(req) and controller
//creating express instant
const express = require("express");
const router = express.Router();

//importing controller 

const {createTodo} = require("../controllers/createTodo"); //callback fun
const {getTodo,getTodoById} = require("../controllers/getTodo"); //callback fun
const {updateTodo} = require("../controllers/updateTodo");
const {deleteTodo} = require("../controllers/deleteTodo");
//define API routes 
//SUBMIT type req
router.post("/createTodo",createTodo); //callback fun 
//GET type req
router.get("/getTodos",getTodo);
//GET type req -get todo by id
router.get("/getTodos/:id",getTodoById);
//PUT/UPDATE type req
router.put("/updateTodo/:id",updateTodo);
//DELETE type req
router.delete("/deleteTodo/:id",deleteTodo);


module.exports = router;