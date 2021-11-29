import express from "express";

const router = express.Router();

import {
  authStudent,
  registerStudent,
  getAllStudent,
  getStudentProfile,
  getAllStudentTestData,
} from "../controller/student.js";

router.route("/").post(registerStudent);

router.route("/lists").get(getAllStudent);

router.route("/lists/:id").get(getStudentProfile)
router.route("/test_data").get(getAllStudentTestData);

router.post("/login", authStudent);

export default router;
