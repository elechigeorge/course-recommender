import timestamp from "mongoose-timestamp";
import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  course_name: {
    type: String,
  },
  first_subject: {
    subject_name: String,
    grade: String,
  },
  second_subject: {
    subject_name: String,
    grade: String,
  },
  third_subject: {
    subject_name: String,
    grade: String,
  },
  fourth_subject: {
    subject_name: String,
    grade: String,
  },
  fifth_subject: {
    subject_name: String,
    grade: String,
  },
  sixth_subject: {
    subject_name: String,
    grade: String,
  },
});

CourseSchema.plugin(timestamp);

const Course = mongoose.model("Course", CourseSchema);

export default Course;
