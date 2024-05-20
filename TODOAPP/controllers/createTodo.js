//required Todo model i.e schema 
const Todo = require("../models/Todo");
//controller
//define router handler
exports.createTodo = async(req,res)=>{
    try{
        //extracting data from req body of req
        const {title,description} = req.body;
        //create a new Todo Obj and insert in DB //db interaction agyi islioye await
        response = await Todo.create({title,description});
        //send json response with success flag
        res.status(200).json({
            success:true,
            data:response,
            message:'Entry created successfully'
        });
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:response,
            message:'Entry not created successfully'
        });
    }
}