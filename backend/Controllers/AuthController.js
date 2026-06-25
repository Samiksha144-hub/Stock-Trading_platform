const User = require("../Models/UserModel");
const { createSecretToken } = require("../utils/SecretToken");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ================= SIGNUP =================
module.exports.Signup = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    // ✅ Validation
    if (!email || !password || !username) {
      return res.status(400).json({
        status: false,
        message: "All fields are required",
      });
    }

    // ✅ Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: false,
        message: "User already exists",
      });
    }

    // ✅ Hash password
    // const hashedPassword = await bcrypt.hash(password, 10);

    // // ✅ Create user
    // const user = await User.create({
    //   email,
    //   password: hashedPassword,
    //   username,
    // });

    const user = await User.create({
      email,
      password,
      username,
    });

    // ✅ Generate token
    const token = createSecretToken(user._id);

    // ✅ Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "Lax",
    });

    return res.status(201).json({
      status: true,
      message: "User signed up successfully",
    });

  } catch (error) {
    console.error("Signup Error:", error);
    return res.status(500).json({
      status: false,
      message: "Signup failed",
    });
  }
};

// ================= LOGIN =================
module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // ✅ Validation
    if (!email || !password) {
      return res.status(400).json({
        status: false,
        message: "All fields are required",
      });
    }

    // ✅ Check user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        status: false,
        message: "Invalid email or password",
      });
    }

    // ✅ Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        status: false,
        message: "Invalid email or password",
      });
    }

    // ✅ Generate token
    const token = createSecretToken(user._id);

    // ✅ Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "Lax",
    });

    return res.status(200).json({
      status: true,
      message: "Login successful",
    });

  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({
      status: false,
      message: "Login failed",
    });
  }
};

// ================= VERIFY USER =================
module.exports.userVerification = async (req, res) => {
  
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ status: false });
    }

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ status: false });
    }

    return res.status(200).json({
      status: true,
      user: user.username,
    });

  } catch (error) {
    return res.status(401).json({ status: false });
  }
};