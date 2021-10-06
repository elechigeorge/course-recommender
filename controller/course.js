import asyncHandler from "express-async-handler";

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
