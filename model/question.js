import timestamp from "mongoose-timestamp";
import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject",
  },
  question: {
    type: String,
  },
  answer: {
    type: String,
    default: "option_one",
  },
  options: {
    option_one: String,
    option_two: String,
    option_three: String,
  },
});

QuestionSchema.plugin(timestamp);

const Question = mongoose.model("Question", QuestionSchema);

export default Question;
