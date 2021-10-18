import asyncHandler from "express-async-handler";

import Exam from "../model/exam.js";
import Student from "../model/student.js";

const makeRecommendation = asyncHandler(async (req, res) => {
  try {
    // collections of student results data
    const studentPerformance = await Exam.find({ student: req.user._id });

    // normalization of student results data
    // create a new array containing just the students performance - subject and it grade
    const performance = studentPerformance.map((_st) => {
      // loop through the objects of arrays to get normalized data
      const subject = _st.exams.map((_) => _.subject_name.name);
      const grade = _st.exams.map((_) => _.grade);
      return {
        subject: subject.toString(),
        grade: grade.toString(),
      };
    });

    res.status(200).json(studentPerformance);

    console.log(performance);
    // implementing multi linear regression
    // testing normalizaed student performance against different courses and their requirements
    // predicting and analysing result data
  } catch (error) {
    // log error
    res.status(500).json({ error: "Server Error" });
  }
});

export { makeRecommendation };
