import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import Admin from "../model/admin.js";

// @desc    Auth admin & get token
// @route   POST /admin/login
// @access  Public
const authAdmin = asyncHandler(async (req, res) => {
  const { password, email } = req.body;

  const admin = await Admin.findOne({ email });

  if (admin && (await admin.matchPassword(password))) {
    res.json({
      token: generateToken(admin._id),
      ...admin,
    });
  } else {
    res.status(401).json("Unauthorized - Invalid Credentials");
  }
});

// @desc    Register a new user
// @route   POST /investor
// @access  Public
const registerAdmin = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const adminExists = await Admin.findOne({ email });

  if (adminExists) {
    res.status(400).json({ error: "That Email is Taken" });
    return;
  }

  const admin = await Admin.create({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
  });

  if (admin) {
    res.status(201).json({
      token: generateToken(admin._id),
      ...admin,
    });
  } else {
    res.status(400).json({ error: "Invalid user data" });
  }
});

export { authAdmin, registerAdmin };
