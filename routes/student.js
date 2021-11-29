import express from "express";

const router = express.Router();

import {
  authStudent,
  registerStudent,
  getAllStudent,
  getStudentProfile,
} from "../controller/student.js";

router.route("/").post(registerStudent);

router.route("/list").get(getAllStudent);

router.route("/list/:id").get(getStudentProfile)

router.post("/login", authStudent);


export default router;
