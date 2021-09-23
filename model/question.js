import timestamp from "mongoose-timestamp";
import mongoose from "mongoose";

const SubjectSchema = new mongoose.Schema({
   question: {
       type: String
   },
   answer: {
       type: String
   },
   option_one: {
       type: String
   },
   option_two: {
    type: String
   },
   option_three: {
       type: String
   }
});

SubjectSchema.plugin(timestamp);

const Subject = mongoose.model("Subject", SubjectSchema);

export default Subject;