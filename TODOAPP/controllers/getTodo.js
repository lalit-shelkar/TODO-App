
//controlller ko scheme lagega
const Todo = require("../models/Todo");
//controller
exports.getTodo = async(req,res)=>{
    try{
        //sare ke sare todo items fetch krne hain from database
        //mongoose li ->> create ,findone findbyid ..
        const todos = await Todo.find({});
        //response
        const response = todos;
        res.status(200).json({
            success:true,
            data:response,
            message:"Entire Todo Data is fetched"
        });
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            data:response,
            message:"Entire Todo Data is  not fetched"
        });
    }
}

exports.getTodoById = async(req,res)=>{
    try{
        //fetching id from request parameters
        const id = req.params.id;
        //fetching single todo item by id
        const todo = await Todo.findById({_id:id});
        //if data is not found
        if(!todo){
            res.status(404).json({
                success:false,
                message:"Data Not Found with given id"
            });
        }
        //if data is found
        res.status(200).json({
            success:true,
            data:todo,
            message:`Data Found with given id ${id}`
        });
    }
    catch(err){
        res.status(500).json({
            success:false,
            error:err.message,
            message:`Server Error`
        });
    }
}