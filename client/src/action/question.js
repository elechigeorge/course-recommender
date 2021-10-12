import api from "../util/api";
import {
  CREATE_QUESTION_REQUEST,
  CREATE_QUESTION_SUCCESS,
  CREATE_QUESTION_FAILED,
  GET_QUESTION_SUCCESS,
  GET_QUESTION_REQUEST,
  GET_QUESTION_FAILED,
} from "../constant/types";

import { logout } from "./student";

// GET ALL QUESTION AS PER SUBJECT NAME
export const getQuestion = (subjectId) => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_QUESTION_REQUEST });

    const {
      studentLogin: { studentInfo },
    } = getState();

    const {
      adminLogin: { adminInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${studentInfo.token || adminInfo.token}`,
      },
      params: {
        subjectId: subjectId,
      },
    };

    const { data } = await api.get("/question", config);

    dispatch({
      type: GET_QUESTION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_QUESTION_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// ADMINISTRATORS - CREATE NEW QUESTION PROCESS
export const makeQuestion = (question) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CREATE_QUESTION_REQUEST,
    });

    const {
      adminLogin: { adminInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${adminInfo.token}`,
      },
    };

    const { data } = await api.post(
      `/question/${question.subject}`,
      question,
      config
    );

    dispatch({
      type: CREATE_QUESTION_SUCCESS,
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
      type: CREATE_QUESTION_FAILED,
      payload: message,
    });
  }
};
