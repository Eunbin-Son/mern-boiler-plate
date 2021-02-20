const mongoose = require('mongoose');
const types = mongoose.Schema.Types;


const userSchema = mongoose.Schema({
    user_ID: {
        type:types.ObjectId
    },
    user_email: {
        type: types.Number,
        maxlength: 50
    },
    user_name: {
        type: types.String,
        maxlength:40
    },
    password: {
        type: types.String,
        minlength:12
    },

    image: String,
    token: {
        type: types.String
    },
    tokenExp: {
        type: types.Number
    },

    role: {
        type: types.String,
        default: "user"
    },
    create_Date: {
        type: types.Date
    },
    gender: {
        type: types.String
    },
    birth: {
        type: types.Number
    }
})

const User = mongoose.model('User', userSchema);
module.exports = {User}
