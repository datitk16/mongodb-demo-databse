const mongoose = require('mongoose');
const { User } = require('./../models/User');


mongoose.connect('mongodb://localhost/social-network', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to mongodb'))
    .catch(e => console.log(e))

/**
 * @param create new user
 */

const createUser = async (user) => {
    const existed = await User.findOne().or([{ username: user.username }, { email: user.email }])
    if (existed) return console.log('Username or Email existed')
    const newUser = await User(user);
    const usersave = await newUser.save()
    console.log(usersave)
}

//lam sao de them id profile vao user
createUser({

    username: 'Nguyen Dinh Dat1',
    password: '12345',
    email: 'devdao2604@gmail.com',
    name: 'Dev dao',

})
/**
 * @param Update Promise
 */
function updateUser(user1) {

    User.findById(user1._id)
        .then(user => {
            console.log(this.user)
            if (!user) return console.log('User is not existed');
            user.username = user1.username,
                user.password = user1.password,
                user.email = user1.email,
                user.name = user1.name

            return user.save();

        })
        .then(user => console.log(user))
        .catch(console.log)

}
updateUser({
    _id: '5dac8af8cdb79a339c4abc70',
    username: 'Dat Dev',
    password: '12345',
    email: 'devdao2604@gmail.com',
    name: 'Dev dao',

})

/**
 * @param Update async
 */
const updateUser = async (user) => {
    const c = await User.findOneAndUpdate(
        {
            username : user.username,
            password:User.password,
            email:user.email,
            name:user.name

        }
    )
    console.log(c)
}
updateUser({
    _id: '5dac8b89f17def21f02af741',
    username: 'Dat Dev',
    password: '12345',
    email: 'devdao2604@gmail.com',
    name: 'Dev dao',

})
/**
 * @param delete
 */

const deleteUser = async (id) => {
    const c = await User.findByIdAndRemove(id);
    console.log(c)
}
deleteUser('5dac8af8cdb79a339c4abc70')