import axios from "axios";
//action types
const USER_REQUEST = "USER_REQUEST";
const USER_SUCCESS = "USER_SUCCESS";
const USER_FAILURE = "USER_FAILURE";

const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";

//Login Actions
let getLoginAction = (user, history) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });
      //We need to invoke backend - Login API
      let config = {
        headers: {
          "content-type": "application/json",
        },
      };
      let response = await axios.post(
        `http://localhost:8000/user/login`,
        JSON.stringify(user),
        config
      );
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
      history.push("/");
    } catch (err) {
      dispatch({ type: LOGIN_FAILURE, payload: err });
    }
  };
};
//Registraion/signUp actions
let getSignUp = (user, history) => {
  return async (dispatch) => {
    try {
      dispatch({ type: USER_REQUEST });

      //consume the Backend API  : localhost:8000/user/register - POST
      //How to consume/invoke api in React. axios
      let config = {
        headers: {
          "content-type": "application/json",
        },
      };
      let response = await axios.post(
        "http://localhost:8000/user/register",
        JSON.stringify(user),
        config
      );

      dispatch({ type: USER_SUCCESS, payload: response.data });
      history.push("/user/login");
    } catch (err) {
      dispatch({ type: USER_FAILURE, payload: err });
    }
  };
};

export {
  getSignUp,
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAILURE,
  getLoginAction,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
};
