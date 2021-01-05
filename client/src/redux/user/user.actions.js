import axios from "axios";
//action types
const USER_REQUEST = "USER_REQUEST";
const USER_SUCCESS = "USER_SUCCESS";
const USER_FAILURE = "USER_FAILURE";

//actions
let getSignUp = (user) => {
  return async (dispatch) => {
    try {
      dispatch({ type: USER_REQUEST });
      console.log("after Request");
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
      console.log("after ...axios");
      dispatch({ type: USER_SUCCESS, payload: response.data });
    } catch (err) {
      dispatch({ type: USER_FAILURE, payload: err });
    }
  };
};

export { getSignUp, USER_REQUEST, USER_SUCCESS, USER_FAILURE };
