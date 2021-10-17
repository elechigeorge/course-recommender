import express from "express";
import { registerExam, getStudentExams } from "../controller/exam.js";

import { protect } from "../middleware/authentication.js";

const router = express.Router();

// ROUTES DEFINITION
router.route("/").get(protect, getStudentExams).post(protect, registerExam);

export default router;
