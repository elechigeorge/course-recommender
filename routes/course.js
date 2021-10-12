import express from "express";

const router = express.Router();
import { createCourse, getAllCourse } from "../controller/course.js";

router.route("/").post(createCourse).get(getAllCourse);

export default router;
