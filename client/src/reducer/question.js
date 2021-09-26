import {
  CREATE_QUESTION_FAILED,
  CREATE_QUESTION_REQUEST,
  CREATE_QUESTION_SUCCESS,
  GET_QUESTION_FAILED,
  GET_QUESTION_REQUEST,
  GET_QUESTION_SUCCESS,
} from "../constant/types";

export const createQuestionReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_QUESTION_REQUEST:
      return { loading: true };
    case CREATE_QUESTION_SUCCESS:
      return { loading: false, question: action.payload };
    case CREATE_QUESTION_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getQuestionReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_QUESTION_REQUEST:
      return { loading: true };
    case GET_QUESTION_SUCCESS:
      return { loading: false, questions: action.payload };
    case GET_QUESTION_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
