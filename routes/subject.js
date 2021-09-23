import express from "express";
import {
  createSubject,
  getSubjectById,
  getAllSubjects,
} from "../controller/subject";
const router = express.Router();

// ROUTES DEFINITION
router.route("/").get(getAllSubjects).post(createSubject);

router.route("/:id").get(getSubjectById);

export default router;
