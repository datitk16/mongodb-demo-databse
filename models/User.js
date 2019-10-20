const mongoose = require('mongoose');
const {ProfileSchema} = require('./Profile')
const UserSchema = mongoose.Schema({
    username: { type: String, require: true },
    password: { type: String, require: true },
    email: { type: String, require: true },
    name: { type: String, require: true },
    dateOfBirth: { type: Date, require:true},
    registerDate: { type: Date, default: new Date().getTime() },
 
    groupIdArr: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group'
    }],
    profile: {
        type:ProfileSchema
        
    }
})

const User=new mongoose.model('User',UserSchema);
module.exports={
    User,
    UserSchema
}