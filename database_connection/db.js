const mongoose =require('mongoose');
require('dotenv').config();
const DB_NAME="AUTHENTICATION";
const connectDB= async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("MONGODB IS CONNECTED");
    } catch (error) {
        console.log("MONGODB connection failed",error);
        process.exit(1);
    }
};
module.exports= connectDB;