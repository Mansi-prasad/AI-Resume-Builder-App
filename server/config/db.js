import mongoose from "mongoose";

const connectDB = async () => {
  try {
    let mongodbURI = process.env.MONGODB_URI;
    const projectName = "resume-builder";

    if (!mongodbURI) {
      throw new Error("MONGODB_URI environment variable not set");
    }
    if (mongodbURI.endsWith("/")) {
      mongodbURI = mongodbURI.slice(0, -1); // remove forward slash if there.
    }

    await mongoose.connect(`${mongodbURI}/${projectName}`);
    console.log("Database connected successfully!");
  } catch (error) {
    console.log("DB connection error: ", error);
  }
};
export default connectDB;
