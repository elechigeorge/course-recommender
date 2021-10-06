import express from "express";

const router = express.Router();
import {
  createCourse,
  getAllCourse,
  getSingleCourse,
} from "../controller/course.js";

router.route("/").post(createCourse).get(getAllCourse);

export default router;
