import api from "../util/api";
import {
  CREATE_SUBJECT_REQUEST,
  CREATE_SUBJECT_SUCCESS,
  CREATE_SUBJECT_FAILED,
  GET_SUBJECT_SUCCESS,
  GET_SUBJECT_REQUEST,
  GET_SUBJECT_FAILED,
  DELETE_SUBJECT_REQUEST,
  DELETE_SUBJECT_SUCCESS,
  DELETE_SUBJECT_FAILED
} from "../constant/types";

import { logout } from "./admin";

// FETCH STORED SUBJECTS
export const fetchSubjects = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_SUBJECT_REQUEST });

    const { data } = await api.get("/subject");

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


// DELETE STORED SUBJECTS
export const removeSubject = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_SUBJECT_REQUEST });

    const { data } = await api.delete(`/subject/${id}`);

    dispatch({
      type: DELETE_SUBJECT_SUCCESS,
      payload: data,
    });

    document.location.href = "/subjects/list";

  } catch (error) {
    dispatch({
      type: DELETE_SUBJECT_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
