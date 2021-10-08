import express from "express";
import {
  createSubject,
  getSingleSubjectDetails,
  getAllSubject,
  getSingleSubjectByName,
} from "../controller/subject.js";
const router = express.Router();

// ROUTES DEFINITION
router.route("/").get(getAllSubject).post(createSubject);

router.route("/:id").get(getSingleSubjectDetails);
router.route("/:name").get(getSingleSubjectByName);

export default router;
