import timestamp from "mongoose-timestamp";
import mongoose from "mongoose";

const RecommendationSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  },
  courses: {
    type: Array,
    default: [],
  },
});

RecommendationSchema.plugin(timestamp);

const Recommendation = mongoose.model("Recommendation", RecommendationSchema);

export default Recommendation;
