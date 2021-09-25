// bring in action types
import {
  STUDENT_LOGIN_FAILED,
  STUDENT_LOGIN_REQUEST,
  STUDENT_LOGIN_SUCCESS,
  STUDENT_LOGOUT,
  STUDENT_REGISTER_FAILED,
  STUDENT_REGISTER_REQUEST,
  STUDENT_REGISTER_SUCCESS,
} from "../constant/types.js";

export const studentLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case STUDENT_LOGIN_REQUEST:
      return { loading: true };
    case STUDENT_LOGIN_SUCCESS:
      return { loading: false, studentInfo: action.payload };
    case STUDENT_LOGIN_FAILED:
      return { loading: false, error: action.payload };
    case STUDENT_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const studentRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case STUDENT_REGISTER_REQUEST:
      return { loading: true };
    case STUDENT_REGISTER_SUCCESS:
      return { loading: false, studentInfo: action.payload };
    case STUDENT_REGISTER_FAILED:
      return { loading: false, error: action.payload };
    case STUDENT_LOGOUT:
      return {};
    default:
      return state;
  }
};
