import axios from "axios";
import store from "../store";
import { STUDENT_LOGOUT } from "../constant/types";

const api = axios.create({
  baseURL: "https://courserecommende.herokuapp.com",
  //baseURL: "http://localhost:4000/",
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired or user is no longer
 authenticated.
 logout the student if the token has expired
**/

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      store.dispatch({ type: STUDENT_LOGOUT });
    }
    return Promise.reject(err);
  }
);

export default api;
