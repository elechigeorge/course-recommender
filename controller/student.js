import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import Student from "../model/student.js";

// @desc    Auth user & get token
// @route   POST /student/login
// @access  Public
const authStudent = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const student = await Student.findOne({ email });

  if (student && (await student.matchPassword(password))) {
    res.json({
      token: generateToken(student._id),
      ...student,
    });
  } else {
    res.status(401).json({ error: "Invalid Credientials" });
  }
});

// @desc    Register a new user
// @route   POST /student/register
// @access  Public
const registerStudent = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const studentExists = await Student.findOne({ email });

  if (studentExists) {
    res.status(400).json({ error: "Email Already Exists" });
    return;
  }

  const student = await Student.create({
    name: req.body.name,
    date_of_birth: req.body.date_of_birth,
    gender: req.body.gender,
    state_of_origin: req.body.state_of_origin,
    email: req.body.email,
    password: req.body.password,
  });

  if (student) {
    res.status(201).json({
      token: generateToken(student._id),
      ...student,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Get user by ID
// @route   GET /student/:id
// @access
const getStudentById = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id).select("-password");

  if (student) {
    res.json(student);
  } else {
    res.status(404);
    throw new Error("Student Details not found");
  }
});

export { authStudent, registerStudent, getStudentById };
