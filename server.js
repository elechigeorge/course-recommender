// IMPORT DOTENV & CONFIGURE
import dotenv from "dotenv";
dotenv.config();
// IMPORT PACKAGES
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

// IMPORT ROUTE FILES
import Subject from "./routes/subject.js";
import Question from "./routes/question.js";
import Course from "./routes/course.js";
import Student from "./routes/student.js";
import Admin from "./routes/admin.js";

// INITIALIZE EXPRESS SEVER
const server = express();

// CONFIGURE MIDDLEWARES
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// CONNECT TO MONGODB DATABASE FROM ATLAS
mongoose
  .connect(process.env.MONGOURI)
  .then((conn) => console.log("Database connected successfully..."))
  .catch((error) => console.error("Database connection error" + error));

// ROUTES SETTING
server.use("/course", Course);
server.use("/subject", Subject);
server.use("/question", Question);
server.use("/student", Student);
server.use("/admin", Admin);

// PRODUCTION ENVIRONMENT SETTING

// LAUNCH SERVER ROCKET
server.listen(process.env.PORT, () =>
  console.log("SERVER RESOURCES RUNNING ON PORT 4000")
);
