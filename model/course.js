import timestamp from "mongoose-timestamp";
import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

CourseSchema.plugin(timestamp);

const Course = mongoose.model("Course", CourseSchema);

export default Course;
