import express from "express";

const router = express.Router();

import { createCourse, getAllCourse, deleteCourse } from "../controller/course.js";

router.route("/").post(createCourse).get(getAllCourse);

router.route("/:id").delete(deleteCourse);

export default router;
