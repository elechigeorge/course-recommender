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

router.route("/list").get(getAllStudent);

router.route("/list/:id").get(getStudentProfile)
router.route("/test_data").get(getAllStudentTestData);

router.post("/login", authStudent);

export default router;
