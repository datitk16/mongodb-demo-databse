const mongoose = require('mongoose');
const { Group } = require('./../models/Group');
const {User} = require('./../models/User');

mongoose.connect('mongodb://localhost/facebook-database', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to mongodb'))
    .catch(e => console.log(e))

/**
 * @param create new group
 */

const createGroup = async (group) => {
    const existed = Group.findOne({name:group.name})
    if(existed) return console.log('Name group existed')
    const newGroup = await Group(group);
    const c = await newGroup.save()
    console.log(c)
}
// createGroup({
//     name: 'Dev code',
//     description: 'dev code is software developer code'
// })

const addUserToGroup= async (userId,groupId)=>{
    const existedGroup=await Group.findById(groupId);
    console.log(existedGroup)
    if(!existedGroup) return console.log('Id group not found');
    existedGroup.userIdArr.push(userId);
   await existedGroup.save()
}
addUserToGroup('5dab37ea3354af20b4841474','5dab28c86cfb441fe4b1f85b')
