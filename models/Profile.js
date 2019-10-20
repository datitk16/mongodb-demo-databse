const mongoose=require('mongoose');
const ProfileSchema=new mongoose.Schema({
    university:{type:[String]},
    major:{type:[String]},
    social:{
        facebook:{type:String},
        instagram:{type:String}
    },
    description:{type:String},
})

const Profile=new mongoose.model('Profile',ProfileSchema,'Profile');

module.exports={
    Profile,
    ProfileSchema
}