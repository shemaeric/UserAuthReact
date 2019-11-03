import {
  LOGIN,
  SIGNUP,
  FAIL_LOGIN,
  GET_USER_PROFILE,
  LOGOUT
} from "../action-types/index";
import initialState from "../store/initialState";

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP:
      return {
        ...state,
        user: payload.data.user
      };
    case LOGIN:
      return {
        ...state,
        user: {
          username: payload.data.user
        },
        error: ""
      };
    case FAIL_LOGIN:
      return {
        ...state,
        error: payload
      };
    case GET_USER_PROFILE:
      return {
        ...state,
        user: payload.data.user
      };
    default:
      return state;
  }
};
