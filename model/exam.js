import timestamp from "mongoose-timestamp";
import mongoose from "mongoose";

const ExamSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  },
  exams: {
    type: Array,
    default: [],
  },
});

ExamSchema.plugin(timestamp);

const Exam = mongoose.model("Exam", ExamSchema);

export default Exam;
