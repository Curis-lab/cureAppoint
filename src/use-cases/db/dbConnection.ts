import mongoose from "mongoose";

const url = 'mongodb+srv://mathnyanlin:qzQm4V9w3HVoZOJE@appointment.cr39f.mongodb.net/appoint'


const connectToDatabase = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connect to database");
  } catch (error) {
    console.log("Error connecting to database", error);
  }
};

export { connectToDatabase };
