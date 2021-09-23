import timestamp from "mongoose-timestamp";
import mongoose from "mongoose";

const SubjectSchema = new mongoose.Schema({
   name: {
       type: String
   },
   questions: [],
});

SubjectSchema.plugin(timestamp);

const Subject = mongoose.model("Subject", SubjectSchema);

export default Subject;