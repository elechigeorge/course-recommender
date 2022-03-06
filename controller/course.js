import asyncHandler from "express-async-handler";
import Course from "../model/course.js";
import Subject from "../model/subject.js";

const createCourse = asyncHandler(async (req, res) => {
  try {
    // check if course doesnt already exists
    const courseExists = await Course.findOne({
      course_name: req.body.course_name,
    });

    if (courseExists) {
      res.status(409).json({ error: "Course Already added..." });
      return;
    }
    // distructure admin request
    const {
      course_name,
      first_subject,
      second_subject,
      third_subject,
      fourth_subject,
      fifth_subject,
      sixth_subject,
    } = req.body;
    // instantiate a new course object
    const newCourse = await Course.create({
      course_name,
      first_subject: {
        subject_name: first_subject.subject_name,
        grade: first_subject.grade,
      },
      second_subject: {
        subject_name: second_subject.subject_name,
        grade: second_subject.grade,
      },
      third_subject: {
        subject_name: third_subject.subject_name,
        grade: third_subject.grade,
      },
      fourth_subject: {
        subject_name: fourth_subject.subject_name,
        grade: fourth_subject.grade,
      },
      fifth_subject: {
        subject_name: fifth_subject.subject_name,
        grade: fifth_subject.grade,
      },
      sixth_subject: {
        subject_name: sixth_subject.subject_name,
        grade: sixth_subject.grade,
      },
    });

    // check course creation status
    if (newCourse) {
      res.status(201).json(newCourse);
    } else {
      res.status(400).json({ error: "Bad Request - Something went wrong" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
    console.log(error);
  }
});

const getAllCourse = asyncHandler(async (req, res) => {
  try {
    // try to get courses
    const courses = await Course.find();

    // check if there are courses
    if (courses) {
      res.status(200).json(courses);
    } else {
      res.status(400).json({ error: "Bad Request/Something is wrong" });
      return;
    }
  } catch (error) {
    res.status(500).json({ error: "server error" });
  }
});

const deleteCourse = asyncHandler(async (req, res) => {
  try {
    // grab subject with it id 
    const sId = req.params.id;

    await Course.findOneAndDelete({ _id: sId });

    res.status(200).json({ mesg: "Deleted ..." })


  } catch (error) {
    res.status(500).json({
      error:
        "Server Error - Try Checking Your Internet Connection and Try again",
    });
  }
});

export { createCourse, getAllCourse, deleteCourse };
