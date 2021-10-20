import asyncHandler from "express-async-handler";
import MLR from "ml-regression-multivariate-linear";
import Exam from "../model/exam.js";
import Student from "../model/student.js";
import Courses from "../model/course.js";
import NodeMLRegression from "../middleware/NMLRegression.js";

const makeRecommendation = asyncHandler(async (req, res) => {
  try {
    // collections of student results data
    const studentPerformance = await Exam.find({ student: req.user._id });
    // get all courses
    const courses = await Courses.find().select("");

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

    // normalization of course data
    // get all courses data into a single junked array
    // loop through the courses array
    let firstarr = courses.map((course) => {
      return {
        subject: course.first_subject.subject_name,
        grade: course.first_subject.grade,
        course: course.course_name,
      };
    });

    let secondarr = courses.map((course) => {
      return {
        subject: course.second_subject.subject_name,
        grade: course.second_subject.grade,
        course: course.course_name,
      };
    });

    let thirdarr = courses.map((course) => {
      return {
        subject: course.third_subject.subject_name,
        grade: course.third_subject.grade,
        course: course.course_name,
      };
    });

    let fourtharr = courses.map((course) => {
      return {
        subject: course.fourth_subject.subject_name,
        grade: course.fourth_subject.grade,
        course: course.course_name,
      };
    });

    let fiftharr = courses.map((course) => {
      return {
        subject: course.fifth_subject.subject_name,
        grade: course.fifth_subject.grade,
        course: course.course_name,
      };
    });
    let sixtharr = courses.map((course) => {
      return {
        subject: course.sixth_subject.subject_name,
        grade: course.sixth_subject.grade,
        course: course.course_name,
      };
    });
    // combining the multiple array object into a normalized array set
    const normalized = firstarr.concat(
      secondarr,
      thirdarr,
      fourtharr,
      fiftharr,
      sixtharr
    );
    // correlative multivariant regression metric search
    // find the possible course match based on students results
    const newMLNode = new NodeMLRegression(performance, normalized);

    const possibleMatch = newMLNode.predictPossibleCourseMatches();

    // slim down the list of possible matches with grade with fuzz table
    let fux_logical_decorator = [];
    let list = [];
    let courslist = {};
    possibleMatch.forEach((matches) => {
      matches.forEach((match) => {
        return fux_logical_decorator.unshift(match);
      });
    });

    if (fux_logical_decorator) {
      fux_logical_decorator.map((fuzz) => {
        return list.unshift({ course: fuzz.course, subject: fuzz.subject });
      });
    }
    //  analysing result data from a D3 LIST
    const OBJECTED_CRISP_DOTS = list.reduce(function (
      __fuzzy_instance,
      accumulator
    ) {
      let _value = accumulator["course"];
      __fuzzy_instance[_value] = (__fuzzy_instance[_value] || 0) + 1;
      return __fuzzy_instance;
    },
    {});

    res.status(200).json({
      resp_mean: OBJECTED_CRISP_DOTS,
      performance,
    });
  } catch (error) {
    // log error
    res.status(500).json({ error: error });
  }
});

export { makeRecommendation };
