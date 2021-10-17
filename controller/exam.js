import asyncHandler from "express-async-handler";

import Exam from "../model/exam.js";

const registerExam = asyncHandler(async (req, res) => {
  try {
    // construct object
    const studentexam = {
      subject_name: req.body.subject_name,
      grade: req.body.grade,
    };
    // grab data from request body
    const newExam = await Exam.create({
      student: req.user,
      exams: studentexam,
    });

    if (newExam) {
      res.status(201).json(newExam);
    } else {
      res.status(400).json({ message: "there was an error" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

const getStudentExams = asyncHandler(async (req, res) => {
  try {
    const studentexam = await Exam.find({ student: req.user }).populate(
      "student"
    );

    if (studentexam) {
      res.status(200).json(studentexam);
    }
  } catch (error) {
    res.status(500).json({ message: "there is an error" });
  }
});

export { registerExam, getStudentExams };
