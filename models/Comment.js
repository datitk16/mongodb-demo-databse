const mongoose=require('mongoose');


const CommentSchema=new mongoose.Schema({
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    content:{type:String,required:true},
    createDate:{type:Date,default:new Date().getTime()}
})