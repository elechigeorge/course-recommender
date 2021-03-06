import api from "../util/api";
import {
  GET_ALL_STUDENTS_FAILED,
  GET_ALL_STUDENTS_REQUESTED,
  GET_ALL_STUDENTS_SUCCESS,
  GET_SINGLE_FAILED,
  GET_SINGLE_REQUEST,
  GET_SINGLE_SUCCESS,
  GET_TEST_FAILED,
  GET_TEST_REQUEST,
  GET_TEST_SUCCESS
} from "../constant/types.js";

// LOADING STUDENTS LIST PROCESS
export const getAllStudentData = () => async (dispatch, getState) => {
    try {
        dispatch({ type: GET_ALL_STUDENTS_REQUESTED });
    
        const {
          adminLogin: { adminInfo },
        } = getState();
    
        const config = {
          headers: {
            Authorization: `Bearer ${adminInfo.token}`,
          },
        };
    
        const { data } = await api.get(`/student/lists`, config);
    
        dispatch({
          type: GET_ALL_STUDENTS_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: GET_ALL_STUDENTS_FAILED,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }
};


// GET INDIVIDUAL STUDENT PROFILES
export const getStudentProfile = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: GET_SINGLE_REQUEST });
    
        const {
          adminLogin: { adminInfo },
        } = getState();
    
        const config = {
          headers: {
            Authorization: `Bearer ${adminInfo.token}`,
          },
        };
    
        const { data } = await api.get(`/student/lists/${id}`, config);
    
        dispatch({
          type: GET_SINGLE_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: GET_SINGLE_FAILED,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }
}

export const getTestData = () => async (dispatch, getState) => {
  try {
      dispatch({ type: GET_TEST_REQUEST });
  
      const {
        adminLogin: { adminInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${adminInfo.token}`,
        },
      };
  
      const { data } = await api.get(`/student/test_data`, config);
  
      dispatch({
        type: GET_TEST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_TEST_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
};