import api from "../util/api";
import {
  CREATE_SUBJECT_REQUEST,
  CREATE_SUBJECT_SUCCESS,
  CREATE_SUBJECT_FAILED,
  GET_SUBJECT_SUCCESS,
  GET_SUBJECT_REQUEST,
  GET_SUBJECT_FAILED,
} from "../constant/types";

import { logout } from "./admin";

// FETCH STORED SUBJECTS
export const fetchSubjects = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_SUBJECT_REQUEST });

    const {
      adminLogin: { adminInfo },
    } = getState();

    const {
      studentLogin: { studentInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${adminInfo.token || studentInfo.token}`,
      },
    };

    const { data } = await api.get("/subject", config);

    dispatch({
      type: GET_SUBJECT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SUBJECT_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// ADMINISTRATORS - CREATE NEW QUESTION PROCESS
export const createSubject = (subject) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CREATE_SUBJECT_REQUEST,
    });

    const {
      adminLogin: { adminInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${adminInfo.token}`,
      },
    };

    const { data } = await api.post(`/subject`, subject, config);

    dispatch({
      type: CREATE_SUBJECT_SUCCESS,
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
      type: CREATE_SUBJECT_FAILED,
      payload: message,
    });
  }
};
