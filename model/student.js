import timestamp from "mongoose-timestamp";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const StudentSchema = new mongoose.Schema({
   name: {
       type: String
   },
   email: {
       type: String
   },
   password: {
       type: String
   },
   date_of_birth: {
       type: String
   },
   gender: {
     type: String
   },
   state_of_origin: {
     type: String
   },
   hasTakenExam: {
       type: Boolean
   },
   subjects: [
   ],
   recommended_course: {
       type: String
   }
});

StudentSchema.plugin(timestamp);

StudentSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

StudentSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const Student = mongoose.model("Student", StudentSchema);

export default Student;