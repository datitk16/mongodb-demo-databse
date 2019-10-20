const mongoose =require('mongoose');

const GroupSchema=mongoose.Schema({
    name:{type:String,require:true},
    description:{type:String,require:true},
    userIdArr:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }]
})

const Group=new mongoose.model('Group',GroupSchema);

module.exports={
    Group,
    GroupSchema
}