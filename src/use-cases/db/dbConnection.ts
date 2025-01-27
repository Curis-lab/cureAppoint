import mongoose from "mongoose";

const url = "mongodb://localhost:27017/cureAppoint";
const dbName = "cureAppoint";

const connectToDatabase = async () => {
  await mongoose
    .connect(url)
    .then(() => console.log("Connected"))
    .catch((error) => console.log(error));
};

export { connectToDatabase };
