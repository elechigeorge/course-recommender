import {
  RECOMMEND_COURSE_FAILED,
  RECOMMEND_COURSE_SUCCESS,
  RECOMMEND_COURSE_REQUEST,
} from "../constant/types";

export const requestRecommendationReducer = (state = {}, action) => {
  switch (action.type) {
    case RECOMMEND_COURSE_REQUEST:
      return { loading: true };
    case RECOMMEND_COURSE_SUCCESS:
      return { loading: false, query: action.payload };
    case RECOMMEND_COURSE_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
