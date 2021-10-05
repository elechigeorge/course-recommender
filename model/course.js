import timestamp from "mongoose-timestamp";
import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  subject_requirements: [
    { first_subject: String, grade: Number },
    { second_subject: String, grade: Number },
    { third_subject: String, grade: Number },
    { fourth_subject: String, grade: Number },
  ],
});

CourseSchema.plugin(timestamp);

const Course = mongoose.model("Course", CourseSchema);

export default Course;
