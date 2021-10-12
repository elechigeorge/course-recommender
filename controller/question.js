import asyncHandler from "express-async-handler";
import Subject from "../model/subject.js";
import Question from "../model/question.js";
import checkObjectId from "../middleware/checkObjectId.js";

const createQuestion = asyncHandler(async (req, res) => {
  // extract the request body
  const { subject, question, answer, option_one, option_two, option_three } =
    req.body;

  // construct the question object
  const newQuestion = {
    subject: req.params.id,
    question: question,
    answer,
    options: {
      option_one,
      option_two,
      option_three,
    },
  };

  try {
    // create a new instance of the questions
    const questions = await Question.create(newQuestion);

    // check creation process circle
    if (questions) {
      res.status(201).json(questions);
    } else {
      res.status(400).json({ error: "Bad Request " });
    }
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

const getQuestionsBySubject = asyncHandler(async (req, res) => {
  // grab the subject ID
  const sid = req.params.id;
  try {
    const questions = await Question.find({
      subject: sid,
    })
      .populate("subject")
      .sort("1");

    if (!questions) {
      return res
        .status(400)
        .json({ msg: "There are no questions for this subject" });
    }

    res.json(questions);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

export { createQuestion, getQuestionsBySubject };
