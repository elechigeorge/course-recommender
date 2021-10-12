import {
  CREATE_SUBJECT_FAILED,
  CREATE_SUBJECT_REQUEST,
  CREATE_SUBJECT_SUCCESS,
  GET_SUBJECT_FAILED,
  GET_SUBJECT_REQUEST,
  GET_SUBJECT_SUCCESS,
} from "../constant/types";

export const createSubjectReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_SUBJECT_REQUEST:
      return { loading: true };
    case CREATE_SUBJECT_SUCCESS:
      return { loading: false, subject: action.payload };
    case CREATE_SUBJECT_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getSubjectReducer = (state = [], action) => {
  switch (action.type) {
    case GET_SUBJECT_REQUEST:
      return { loading: true };
    case GET_SUBJECT_SUCCESS:
      return { loading: false, subject: action.payload };
    case GET_SUBJECT_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
