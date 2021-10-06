import asyncHandler from "express-async-handler";

const createQuestion = asyncHandler(async (req, res) => {
  res.send("question created");
});

const getQuestionsBySubject = asyncHandler(async (req, res) => {
  res.send("question getted");
});

export { createQuestion, getQuestionsBySubject };
