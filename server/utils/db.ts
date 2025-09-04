import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI:string = process.env.MONGODB_URI || " ";

export const connectDB = async () => {
    try{

        await mongoose.connect(MONGODB_URI).then(() => {
            console.log("Database connection successfull");
        })

    }catch(err){

        console.log(err);
        
    }
}