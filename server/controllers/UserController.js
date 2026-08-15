import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Resume from "../models/Resume.js";

// geneerate token
const generateToken = (userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  return token;
};
// register user
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check for required fields
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // check for user already exists
    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // create new user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = generateToken(newUser._id);
    newUser.password = undefined;

    return res
      .status(201)
      .json({ message: "User created successfully!", token, user: newUser });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// user login
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check for required fields
    if (!email || !password) {
      return res.status(400).json({ message: "Enter email and password." });
    }

    // check for user already exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // check for password incorrect
    if (!user.comparePassword(password)) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // return
    const token = generateToken(user._id);
    user.password = undefined;

    return res
      .status(200)
      .json({ message: "Login successfully!", token, user });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// get user by id
export const getUserById = async (req, res) => {
  try {
    const userId = req.userId; // from middleware

    // check if user not exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // return user
    user.password = undefined;
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// getting user resumes
export const getUserResumes = async (req, res) => {
  try {
    const userId = req.userId;

    // return user resumes
    const resumes = await Resume.find({ userId });
    return res.status(200).json({ resumes });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
