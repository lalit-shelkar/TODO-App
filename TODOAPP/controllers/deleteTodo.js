const Todo = require("../models/Todo");

exports.deleteTodo = async(req,res)=>{
    try{
        const id = req.params.id;// const {id} = req.params;
        const todo = await Todo.findByIdAndDelete({_id:id});
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo Data for id ${id} is deleted`
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