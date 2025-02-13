import mongoose from "mongoose";

const DbCon = async()=> {
    try{
       await mongoose.connect(process.env.MONGODB_URL);
       console.log("MongoDB is connected");
    }
    catch{
       console.log(error);
    }
}

export default DbCon;