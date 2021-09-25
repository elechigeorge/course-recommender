import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { studentLoginReducer, studentRegisterReducer } from "./reducer/student";

import { adminLoginReducer, adminRegisterReducer } from "./reducer/admin";

import {} from "./reducer/subject";

import {} from "./reducer/question";

import {
  profileCreateReducer,
  getAllProfilesReducer,
  getProfileReducer,
} from "./reducer/course";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,

  adminLogin: adminLoginReducer,
  adminRegister: adminRegisterReducer,

  profileCreate: profileCreateReducer,
  getAllProfiles: getAllProfilesReducer,
  getProfile: getProfileReducer,

  academicsCreate: academicsCreateReducer,
  getAllAcademics: getAllAcademicsReducer,
  getAcademics: getAcademicsReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const adminInfoFromStorage = localStorage.getItem("adminInfo")
  ? JSON.parse(localStorage.getItem("adminInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  adminLogin: { adminInfo: adminInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
