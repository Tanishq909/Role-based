import UserModel from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const register = async(req,res) => {
    try {
        const {name,email,password} = req.body;

        const existUser = await UserModel.findOne({email});
        if (existUser) {
            return res.status(401).json({success:false,message: "User already exists"});
        }

        const hashPassword = await bcrypt.hash(password,10);
        
        const newUser = new UserModel({
            name,
            email,
            password:hashPassword
        })

        await newUser.save();

        res.status(200).json({message:"User registered successfully",newUser});
    } catch (error) {
        res.status(500).json({success:false,message: "Internal server error"});
        console.log(error);
    } 
}

const Login = async(req,res) => {
    try {
        const {email,password} = req.body;

        const user = await UserModel.findOne({email});

        if (!user) {
            return res.status(401).json({success:false,message: "User not found"});
        }

        const ispasswordMatch = await bcrypt.compare(password,user.password);

        if (!ispasswordMatch) {
            return res.status(401).json({success:false,message: "Invalid credentials"});
        }   

        const token = jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:"1h"});

        res.cookie('token',token,{
            httpOnly:true,
            secure: false,
            maxAge: 3600000,
        });
        res.status(200).json({success:true,message:"User logged in successfully",user});
    }
    catch(error) {
        res.status(500).json({success:false,message: "Internal server error"});
        console.log(error);
    }
}

const Logout = async(req,res) => {
    try {
        res.clearCookie('token');
        res.status(200).json({message:"user logout successfully"});
    } catch (error) {
        res.status(500).json({success:false,message: "Internal server error"});
        console.log(error);
    }
}
export {register,Login,Logout};

