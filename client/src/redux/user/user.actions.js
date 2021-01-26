import axios from "axios";
import { setAuth } from "./Auth/setAuth";
//action types
const USER_REQUEST = "USER_REQUEST";
const USER_SUCCESS = "USER_SUCCESS";
const USER_FAILURE = "USER_FAILURE";

const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";

const GET_USER_REQUEST = "GET_USER_REQUEST";
const GET_USER_SUCCESS = "GET_USER_SUCCESS";
const GET_USER_FAILURE = "GET_USER_FAILURE";

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
      // dispatch(getUserInfo());
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

let getUserInfo = () => {
  return async (dispatch) => {
    try {
      if (localStorage.token) {
        //below funciton - obj is to the http header
        setAuth(localStorage.getItem("token"));
      }

      dispatch({ type: GET_USER_REQUEST });
      // below api required HTTP Headers
      let user = await axios.get(`http://localhost:8000/user/`);
      dispatch({ type: GET_USER_SUCCESS, payload: user });
    } catch (err) {
      dispatch({ type: GET_USER_FAILURE, payload: err });
    }
  };
};
export {
  getSignUp,
  // getUserInfo,
  getLoginAction,
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
};
