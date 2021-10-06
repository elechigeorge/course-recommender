import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import Admin from "../model/admin.js";

// @desc    Auth admin & get token
// @route   POST /admin/login
// @access  Public
const authAdmin = asyncHandler(async (req, res) => {
  const { password, email } = req.body;

  const admin = await Admin.findOne({ email });

  if (investor && (await investor.matchPassword(password))) {
    res.json({
      token: generateToken(investor._id),
      ...investor,
    });
  } else {
    res.status(401);
    throw new Error("Invalid Credentials");
  }
});

// @desc    Register a new user
// @route   POST /investor
// @access  Public
const registerAdmin = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const adminExists = await Admin.findOne({ email });

  if (adminExists) {
    res.status(400);
    throw new Error("That Email is Taken");
  }

  const admin = await Admin.create({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
  });

  if (admin) {
    res.status(201).json({
      token: generateToken(investor._id),
      ...admin,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

export { authAdmin, registerAdmin };
