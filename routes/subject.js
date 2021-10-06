import express from "express";
import {
  createSubject,
  getSingleSubjectDetails,
  getAllSubject,
} from "../controller/subject.js";
const router = express.Router();

// ROUTES DEFINITION
router.route("/").get(getAllSubject).post(createSubject);

router.route("/:subjectName").get(getSingleSubjectDetails);

export default router;
