import express from "express";
import {
  getAllQuestionsBySubjectId,
  createNewQuestionBySubjectId,
} from "../controller/question";
const router = express.Router();

// ROUTES DEFINITION
router
  .route("/:subjectId")
  .get(getAllQuestionsBySubjectId)
  .post(createNewQuestionBySubjectId);

export default router;
