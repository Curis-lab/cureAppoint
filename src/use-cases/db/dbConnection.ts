import mongoose from "mongoose";


const connectToDatabase = async () => {
  try {
    if (!process.env.MONGO_URL) {
      return;
    }
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connect to database");
  } catch (error) {
    console.log("Error connecting to database", error);
  }
};

export { connectToDatabase };
