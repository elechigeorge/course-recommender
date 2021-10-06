import asyncHandler from "express-async-handler";

const createSubject = asyncHandler(async (req, res) => {
  res.send("subject created");
});

const getAllSubject = asyncHandler(async (req, res) => {
  res.send("subject getted");
});

const getSingleSubjectDetails = asyncHandler(async (req, res) => {
  res.send("subject gotted by ID");
});

export { createSubject, getAllSubject, getSingleSubjectDetails };
