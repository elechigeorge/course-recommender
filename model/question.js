import timestamp from "mongoose-timestamp";
import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
  },
  answer: {
    type: String,
  },
  option_one: {
    type: String,
  },
  option_two: {
    type: String,
  },
  option_three: {
    type: String,
  },
});

QuestionSchema.plugin(timestamp);

const Question = mongoose.model("Question", QuestionSchema);

export default Question;
