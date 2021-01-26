// Reducer is pure function
// state, action
import {
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
} from "./user.actions";

let initialState = {
  user: null,
  loading: false,
  isAuthenticated: false,
  token: null,
  errorMessage: null,
};
let userReducer = (state = initialState, action) => {
  let { payload } = action;
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return { ...state, loading: false, token: payload };
    case LOGIN_FAILURE:
      localStorage.removeItem("token");
      return {
        ...state,
        loading: false,
        errorMessage: payload,
      };
    case USER_REQUEST:
      return { ...state, loading: true };
    case USER_SUCCESS:
      return { ...state, loading: false };
    case USER_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: payload,
      };

    case GET_USER_REQUEST:
      return { ...state, loading: true };
    case GET_USER_SUCCESS:
      localStorage.setItem("user", payload.user);
      return {
        ...state,
        loading: false,
        user: payload.user,
        isAuthenticated: true,
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: payload,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default userReducer;
/*
    1. View - Button Event -> dispatch the action(Redux actions)
    2. Redux action - consume the Back End api. invoke the reducers
        dispatch({type, payload})
    3. reducer is pure function(state=intial state, action) 
       reducer is updating/creating new store based on action types

*/
