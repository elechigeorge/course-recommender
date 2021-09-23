import timestamp from "mongoose-timestamp";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const CourseSchema = new mongoose.Schema({
   name: {
       type: String
   }
});

CourseSchema.plugin(timestamp);


const Course = mongoose.model("Course", CourseSchema);

export default Course;