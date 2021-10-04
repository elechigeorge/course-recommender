import timestamp from "mongoose-timestamp";
import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
  },
  answer: {
    type: String,
    default: "option-one",
  },
  options: [
    { "option-one": String },
    { "option-two": String },
    { "option-three": String },
  ],
});

QuestionSchema.plugin(timestamp);

const Question = mongoose.model("Question", QuestionSchema);

export default Question;
