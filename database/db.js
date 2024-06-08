import mongoose from "mongoose";

const Connection = async () => {
  const URL = `mongodb+srv://vishalverma1273:vishalverma1273@cluster0.3il5wgn.mongodb.net/`;
  try {
    await mongoose.connect(URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database", error);
  }
};

export default Connection;
