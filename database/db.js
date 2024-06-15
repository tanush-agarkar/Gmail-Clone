import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const Connection = () => {
  const DB_URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.rnpxku4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
  try {
    mongoose.connect(DB_URI, { useNewUrlParser: true });
    // mongoose.set("strictQuery", false);
    console.log("Database connected sucessfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error.message);
  }
};

export default Connection;
