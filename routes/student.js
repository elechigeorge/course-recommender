import express from "express";

const router = express.Router();

import {
  authStudent,
  registerStudent,
  getStudentById,
} from "../controller/student.js";

router.route("/").post(registerStudent);

router.route("/user/:id").get(getStudentById);

router.post("/login", authStudent);

export default router;
