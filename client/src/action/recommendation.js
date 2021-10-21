import api from "../util/api";
import {
  RECOMMEND_COURSE_FAILED,
  RECOMMEND_COURSE_REQUEST,
  RECOMMEND_COURSE_SUCCESS,
} from "../constant/types";

import { logout } from "./student";

// GET ALL QUESTION AS PER SUBJECT NAME
export const requestRecommendation = () => async (dispatch, getState) => {
  try {
    dispatch({ type: RECOMMEND_COURSE_REQUEST });

    const {
      studentLogin: { studentInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${studentInfo.token}`,
      },
    };

    const { data } = await api.get("/recommendation/", config);

    dispatch({
      type: RECOMMEND_COURSE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RECOMMEND_COURSE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
