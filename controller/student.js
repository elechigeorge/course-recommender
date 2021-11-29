import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import Exam from "../model/exam.js";
import Student from "../model/student.js";
import reader from 'xlsx'

// @desc    Auth user & get token
// @route   POST /student/login
// @access  Public
const authStudent = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  try {
    // check if email and password field is empty
    if (email !== "" && password !== "") {
      const student = await Student.findOne({ email });

      if (student && (await student.matchPassword(password))) {
        res.json({
          token: generateToken(student._id),
          name: student.name,
          emial: student.email,
          password: student.password,
          date_of_birth: student.date_of_birth,
          gender: student.gender,
          state_of_origin: student.state_of_origin,
        });
      } else {
        res.status(401).json({ error: "Invalid Credientials" });
      }
    }
  } catch (error) {
    res.status(500).json({ msg: "server error" });
  }
});

// @desc    Register a new user
// @route   POST /student/register
// @access  Public
const registerStudent = asyncHandler(async (req, res) => {
  const { name, email, password, date_of_birth, gender, state_of_origin } =
    req.body;

  const studentExists = await Student.findOne({ email });

  if (studentExists) {
    res.status(400).json({ error: "Email Already Exists" });
    return;
  }

  try {
    if (!name && !email) {
      throw new Error("error ");
      return;
    }
    const student = await Student.create({
      name,
      email,
      password,
      date_of_birth,
      gender,
      state_of_origin,
    });

    if (student) {
      res.status(201).json({
        token: generateToken(student._id),
        name: student.name,
        email: student.email,
        password: student.password,
        date_of_birth: student.date_of_birth,
        gender: student.gender,
        state_of_origin: student.state_of_origin,
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  } catch (error) {
    res.status(500).json({ msg: "server error" });
  }
});

// @desc    Get all student instances
// @route   GET /student
// @access  Private to admin
const getAllStudent = asyncHandler(async (req, res) => {
  try {
    // get all students instances
    const student = await Student.find({}).select("-password");

    if (student) {
      res.status(200).json(student);
    }
  } catch (error) {
    res.status(500).json({ msg: "server error" });
  }
});

const getStudentProfile = asyncHandler(async (req, res) => {
  // grab student object id 
  const id = req.params.id;

  try {
    // get student exams information 
    const exams = await Exam.find({student: id}).populate("student")

    if(exams) {
      res.status(200).json(exams);
    } else {
      res.status(200).json("this student hasn't written any papers yet")
    }
  } catch (error) {
    res.status(500).json("Server Error")
  }
 
});

// @desc    Get all student instances
// @route   GET /student/test_data
// @access  Private to admin
const getAllStudentTestData = asyncHandler(async (req, res) => {
  

    
});


export { authStudent, registerStudent, getAllStudent, getStudentProfile, getAllStudentTestData };
