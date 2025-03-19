import mongoose from 'mongoose';

const db = require('../config/db').default;

const {Schema} = mongoose;

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
});

const userModel = db.model("user", userSchema);

export default userModel;