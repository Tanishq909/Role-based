import mongoose from "mongoose";

const DbCon = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB is connected");
    } catch (error) {
<<<<<<< HEAD
        console.log(error); // Correctly log the error
=======
        console.log(error);
>>>>>>> 47a2d16212364ff6139fdcb7248d25836b856476
    }
}

export default DbCon;
