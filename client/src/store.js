import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { studentLoginReducer, studentRegisterReducer } from "./reducer/student";

import { adminLoginReducer, adminRegisterReducer } from "./reducer/admin";

import { createSubjectReducer, getSubjectReducer } from "./reducer/subject";

import { createQuestionReducer, getQuestionReducer } from "./reducer/question";

import { registerExamReducer, fetchExamsReducer } from "./reducer/exam";

import { createCourseReducer, getCourseReducer } from "./reducer/course";

import { requestRecommendationReducer } from "./reducer/recommendation";

import {getAllStudentReducer, getStudentProfile} from "./reducer/profile";


const reducer = combineReducers({
  // students reducers list
  studentLogin: studentLoginReducer,
  studentRegister: studentRegisterReducer,

  // admin reducers list
  adminLogin: adminLoginReducer,
  adminRegister: adminRegisterReducer,

  // questions reducer
  createQuestion: createQuestionReducer,
  getQuestion: getQuestionReducer,

  // subjects reducer
  createSubject: createSubjectReducer,
  getSubject: getSubjectReducer,

  // course reducer
  createCourse: createCourseReducer,
  getCourse: getCourseReducer,

  // exam reducer
  registerExam: registerExamReducer,
  fetchExams: fetchExamsReducer,

  // recommender module
  createRecommendation: requestRecommendationReducer,

  // student profile modules
  getAllStudents: getAllStudentReducer,
  getProfile: getStudentProfile,
});

const studentInfoFromStorage = localStorage.getItem("studentInfo")
  ? JSON.parse(localStorage.getItem("studentInfo"))
  : null;

const adminInfoFromStorage = localStorage.getItem("adminInfo")
  ? JSON.parse(localStorage.getItem("adminInfo"))
  : null;

const initialState = {
  studentLogin: { studentInfo: studentInfoFromStorage },
  adminLogin: { adminInfo: adminInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
