import {
  CREATE_COURSE_FAILED,
  CREATE_COURSE_REQUEST,
  CREATE_COURSE_SUCCESS,
  GET_COURSE_FAILED,
  GET_COURSE_REQUEST,
  GET_COURSE_SUCCESS,
  RECOMMEND_COURSE_FAILED,
  RECOMMEND_COURSE_REQUEST,
  RECOMMEND_COURSE_SUCCESS,
  DELETE_COURSE_FAILED,
  DELETE_COURSE_REQUEST,
  DELETE_COURSE_SUCCESS
} from "../constant/types";

export const createCourseReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_COURSE_REQUEST:
      return { loading: true };
    case CREATE_COURSE_SUCCESS:
      return { loading: false, course: action.payload };
    case CREATE_COURSE_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getCourseReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_COURSE_REQUEST:
      return { loading: true };
    case GET_COURSE_SUCCESS:
      return { loading: false, courses: action.payload };
    case GET_COURSE_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteCourseReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_COURSE_REQUEST:
      return { loading: true };
    case DELETE_COURSE_SUCCESS:
      return { loading: false, message: action.payload };
    case DELETE_COURSE_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const recommendCourseReducer = (state = {}, action) => {
  switch (action.type) {
    case RECOMMEND_COURSE_REQUEST:
      return { loading: true };
    case RECOMMEND_COURSE_SUCCESS:
      return { loading: false, courses: action.payload };
    case RECOMMEND_COURSE_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
