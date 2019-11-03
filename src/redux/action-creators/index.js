import axios from "axios";
import {
  LOGIN,
  FAIL_LOGIN,
  SIGNUP,
  FAIL_SIGNUP,
  GET_USER_PROFILE,
  FAIL_GET_USER_PROFILE,
  GET_USER_REPOS,
  LOGOUT
} from "../action-types/index";

export const signup = data => async dispatch => {
  const URL = "https://node-app-interview.herokuapp.com/api/v1/signup";
  try {
    const signupUser = await axios.post(URL, data, { header: {} });
    return dispatch({ type: SIGNUP, payload: signupUser });
  } catch (error) {
    const { message } = error;
    return dispatch({ type: FAIL_SIGNUP, payload: message });
  }
};

export const login = data => async dispatch => {
  const URL = "https://node-app-interview.herokuapp.com/api/v1/login";
  try {
    const loginUser = await axios.post(URL, data, { header: {} });
    localStorage.setItem("token", loginUser.data.token);
    return dispatch({ type: LOGIN, payload: loginUser });
  } catch (error) {
    return dispatch({ type: FAIL_LOGIN, payload: error.response.data.message });
  }
};

export const getProfile = username => async dispatch => {
  const URL = `https://node-app-interview.herokuapp.com/api/v1/profile/${username}`;
  try {
    const userProfile = await axios.get(URL, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    });
    return dispatch({ type: GET_USER_PROFILE, payload: userProfile });
  } catch (error) {
    return dispatch({
      type: FAIL_GET_USER_PROFILE,
      payload: error.response.data.message
    });
  }
};
