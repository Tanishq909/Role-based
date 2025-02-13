import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true 
    },
    email: {
        type: String,
        required: true,
        unique : true
    },
    role :{
        type : String,
        enum : ['user','admin'],
        default : 'user'
    },
    password : {
        type : String,
        required : true
    },
}, { timestamps: true }); //createdAt and updatedAt add kar deta hai

const UserModel = mongoose.model('user',userSchema);

export default UserModel;