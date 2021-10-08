import asyncHandler from "express-async-handler";
import Course from "../model/course.js";
import Subject from "../model/subject.js";

const createCourse = asyncHandler(async (req, res) => {
  res.send("course created");
});

const getAllCourse = asyncHandler(async (req, res) => {
  res.send("course getted");
});

const getSingleCourse = asyncHandler(async (req, res) => {
  res.send("course gotted by ID");
});

export { createCourse, getAllCourse, getSingleCourse };
