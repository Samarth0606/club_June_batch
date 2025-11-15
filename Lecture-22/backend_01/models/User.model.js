const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    password: String
});

// model
const UserModel = mongoose.model('User', userSchema);

// export
module.exports = UserModel;
