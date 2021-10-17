import api from "../util/api";
import {
  CREATE_EXAM_REQUEST,
  CREATE_EXAM_SUCCESS,
  CREATE_EXAM_FAILED,
  GET_EXAM_SUCCESS,
  GET_EXAM_REQUEST,
  GET_EXAM_FAILED,
} from "../constant/types";

import { logout } from "./student";

// GET ALL EXAM AS PER SUBJECT NAME
export const fetchExams = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_EXAM_REQUEST });

    const {
      studentLogin: { studentInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${studentInfo.token}`,
      },
    };

    const { data } = await api.get(`/exam/`, config);

    dispatch({
      type: GET_EXAM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_EXAM_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// ADMINISTRATORS - CREATE NEW QUESTION PROCESS
export const registerExam = (exam) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CREATE_EXAM_REQUEST,
    });

    const {
      studentLogin: { studentInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${studentInfo.token}`,
      },
    };

    const { data } = await api.post(`/exam`, exam, config);

    dispatch({
      type: CREATE_EXAM_SUCCESS,
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
      type: CREATE_EXAM_FAILED,
      payload: message,
    });
  }
};
