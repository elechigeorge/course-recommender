import api from "../util/api";
import {
  CREATE_COURSE_REQUEST,
  CREATE_COURSE_SUCCESS,
  CREATE_COURSE_FAILED,
  GET_COURSE_SUCCESS,
  GET_COURSE_REQUEST,
  GET_COURSE_FAILED,
  DELETE_COURSE_FAILED,
  DELETE_COURSE_REQUEST,
  DELETE_COURSE_SUCCESS
} from "../constant/types";

import { logout } from "./admin";

// DEVELOPER - GET ALL REGISTERED COURSES
export const fetchCourse = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_COURSE_REQUEST });

    const { data } = await api.get("/course");

    dispatch({
      type: GET_COURSE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_COURSE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// DEVELOPER - CREATE NEW COURSE PROCESS
export const makeCourse = (course) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CREATE_COURSE_REQUEST,
    });

    const {
      adminLogin: { adminInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${adminInfo.token}`,
      },
    };

    const { data } = await api.post(`/course`, course, config);

    dispatch({
      type: CREATE_COURSE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: CREATE_COURSE_FAILED,
      payload: message,
    });
  }
};


export const removeCourse = (id) => async (dispatch, getState) => {
  try {

    console.log("called")

    
    dispatch({ type: DELETE_COURSE_REQUEST });

    const { data } = await api.delete(`/course/${id}`);

    dispatch({
      type: DELETE_COURSE_SUCCESS,
      payload: data,
    });

    document.location.href = "/course/list";
    
  } catch (error) {
    dispatch({
      type: DELETE_COURSE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};