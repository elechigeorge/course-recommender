import express from "express";
import {
  createQuestion,
  getQuestionsBySubject,
} from "../controller/question.js";

const router = express.Router();

// ROUTES DEFINITION
router.route("/").get(getQuestionsBySubject).post(createQuestion);

export default router;
