import {
  GET_ALL_STUDENTS_FAILED,
  GET_ALL_STUDENTS_SUCCESS,
  GET_ALL_STUDENTS_REQUESTED,
  GET_SINGLE_SUCCESS,
  GET_SINGLE_REQUEST,
  GET_SINGLE_FAILED,
  GET_TEST_FAILED,
  GET_TEST_REQUEST,
  GET_TEST_SUCCESS
  } from "../constant/types";
  
  export const getAllStudentReducer = (state = [], action) => {
    switch (action.type) {
      case GET_ALL_STUDENTS_REQUESTED:
        return { loading: true };
      case GET_ALL_STUDENTS_SUCCESS:
        return { loading: false, students: action.payload };
      case GET_ALL_STUDENTS_FAILED:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export const getTestReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_TEST_REQUEST:
        return { loading: true };
      case GET_TEST_SUCCESS:
        return { loading: false, testdata: action.payload };
      case GET_TEST_FAILED:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const getStudentProfile = (state = [], action) => {
    switch (action.type) {
      case GET_SINGLE_REQUEST:
        return { loading: true };
      case GET_SINGLE_SUCCESS:
        return { loading: false, profiles: action.payload };
      case GET_SINGLE_FAILED:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  