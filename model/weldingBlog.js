import mongoose from "mongoose";
import { env } from "../config/env.js";

// Step 1: Connect to MongoDB
try {
  await mongoose.connect(env.MONGODB_URL, {
    dbName: env.MONGODB_DATABASE_NAME,
  });
  console.log("MongoDB connected successfully!");
} catch (error) {
  console.error(error);
}

// Step 2: Create Blog Schema
const weldingBlogSchema = new mongoose.Schema({
  title: { type: String, required: true }, 
  excerpt: { type: String, required: true },
  content: { type: String, required: true }, 
  imageUrl: { type: String, required: true },
  category: { type: String, required: true },
  author: { type: String, required: true }, 
  createdAt: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 }, 
  slug: { type: String, required: true, unique: true }, 
});

// Step 3: Create Model
const WeldingBlog = mongoose.model("WeldingBlog", weldingBlogSchema);

export default WeldingBlog;
