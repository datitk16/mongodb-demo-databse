const mongoose = require('mongoose');
const { Profile } = require('./../models/Profile');

mongoose.connect('mongodb://localhost/facebook-database', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to mongodb'))
    .catch(e => console.log(e))

/**
 * @param profile 
 */
const createProfile = async (profile) => {
    const newProfile = await Profile(profile);
    const saveProfile = await newProfile.save()
    console.log(saveProfile)
}

createProfile({
    university:'Dai hoc Su Pham Ky Thuat TP.HCM',
    major:'Cong nghe thong tin',
    social:'fcebook',
    description:'Cham ngoan'
})
module.exports={
    createProfile
}