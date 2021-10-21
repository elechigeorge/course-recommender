// IMPORT DOTENV & CONFIGURE
import dotenv from "dotenv";
dotenv.config();
// IMPORT PACKAGES
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";
const __dirname = path.resolve();

// IMPORT ROUTE FILES
import Subject from "./routes/subject.js";
import Question from "./routes/question.js";
import Course from "./routes/course.js";
import Student from "./routes/student.js";
import Admin from "./routes/admin.js";
import Exam from "./routes/exam.js";
import Recommendation from "./routes/recommendation.js";

// INITIALIZE EXPRESS SEVER
const server = express();

// CONFIGURE MIDDLEWARES
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// CONNECT TO MONGODB DATABASE FROM ATLAS
const MONGOPORT =
  process.env.MONGOURI ||
  "mongodb+srv://elechi:elechi@examlab.hcmbu.mongodb.net/examlab?retryWrites=true&w=majority";
mongoose
  .connect(MONGOPORT)
  .then((conn) => console.log("Database connected successfully..."))
  .catch((error) => console.error("Database connection error" + error));

// PRODUCTION ENVIRONMENT SETTING
server.use(express.static(path.resolve(__dirname, "./client/build")));

// ROUTES SETTING
server.use("/course", Course);
server.use("/subject", Subject);
server.use("/question", Question);
server.use("/student", Student);
server.use("/admin", Admin);
server.use("/exam", Exam);
server.use("/recommendation", Recommendation);

server.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

const PORT = process.env.PORT || 4000;

// LAUNCH SERVER ROCKET
server.listen(PORT, () => console.log("SERVER RESOURCES RUNNING ON PORT 4000"));
