const mongoose=require('mongoose');
const {LikeSchema}=require('./Likes');
const PostSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true
    },
    title:{type:String,require:true},
    content:{type:String,require:true},
    likes:{
        //one a Post has many Like
        type:[LikeSchema]
    }
    // comment {}: comment perfom buketing
})
const Post=new mongoose.model('Post',PostSchema);
module.exports={
    PostSchema,
    Post
}