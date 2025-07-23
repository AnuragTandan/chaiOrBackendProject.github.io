// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
dotenv.config({ path: "./env" });
dotenv.config();
// console.log("MONGODB_URI:", process.env.MONGODB_URI);

// import mongoose from "mongoose";
// import { dbName } from "./constants.js";
// import express from "express";
import connectDB from "./db/db.js";

connectDB();

// const app = express();
// ;(async () => {
//   try{
//     // Connect to MongoDB
//     await mongoose.connect(`${process.env.MONGODB_URI}/${dbName}`);

//     app.on("error",() => {
//       console.error("Error in express app");
//       throw error
//     })

//     app.listen(process.env.PORT, () => {
//       console.log(`Server is running on port ${process.env.PORT}`);
//     })

//   }catch (err){
//     console.error(err.message);
//     throw err;
//     }
// })()
