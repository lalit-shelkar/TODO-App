
const Todo = require("../models/Todo");

exports.updateTodo = async(req,res)=>{
    try{
        const id = req.params.id;// const {id} = req.params;
        const {title,description,} = req.body;//kya update karwana chahta hu
        const todo = await Todo.findByIdAndUpdate({_id:id},{title,description,updatedAt:Date.now()});
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo Data for id ${id} is updated`
        });
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:`Server Error`
        });
    }
}