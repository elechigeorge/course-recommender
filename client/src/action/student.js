import api from "../util/api";
import {
  STUDENT_LOGIN_FAILED,
  STUDENT_LOGIN_REQUEST,
  STUDENT_LOGIN_SUCCESS,
  STUDENT_LOGOUT,
  STUDENT_REGISTER_FAILED,
  STUDENT_REGISTER_REQUEST,
  STUDENT_REGISTER_SUCCESS,
} from "../constant/types.js";

// STUDENT LOGIN PROCESS
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: STUDENT_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await api.post(
      "/student/login",
      { email, password },
      config
    );

    dispatch({
      type: STUDENT_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("studentInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: STUDENT_LOGIN_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// STUDENT LOGOUT PROCESS
export const logout = () => (dispatch) => {
  localStorage.removeItem("studentInfo");

  dispatch({ type: STUDENT_LOGOUT });

  document.location.href = "/";
};

// STUDENT REGISTRATION PROCESS
export const register =
  (name, email, password, date_of_birth, gender, state_of_origin) =>
  async (dispatch) => {
    try {
      dispatch({
        type: STUDENT_REGISTER_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await api.post(
        "/student",
        {
          name,
          email,
          password,
          date_of_birth,
          gender,
          state_of_origin,
        },
        config
      );

      dispatch({
        type: STUDENT_REGISTER_SUCCESS,
        payload: data,
      });

      dispatch({
        type: STUDENT_LOGIN_SUCCESS,
        payload: data,
      });

      localStorage.setItem("studentInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: STUDENT_REGISTER_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
