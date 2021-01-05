// Reducer is pure function
// state, action
import { USER_REQUEST, USER_SUCCESS, USER_FAILURE } from "./user.actions";

let initialState = {
  user: null,
  loading: false,
  token: null,
  errorMessage: null,
};
let userReducer = (state = initialState, action) => {
  let { payload } = action;
  switch (action.type) {
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