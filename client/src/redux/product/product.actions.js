import axios from "axios";

const UPLOAD_REQUEST = "UPLOAD_REQUEST";
const UPLOAD_SUCCESS = "UPLOAD_SUCCESS";
const UPLOAD_FAILURE = "UPLOAD_FAILURE";

const GET_LAPTOPS_REQUEST = "GET_LAPTOPS_REQUEST";
const GET_LAPTOPS_SUCCESS = "GET_LAPTOPS_SUCCESS";
const GET_LAPTOPS_FAILURE = "GET_LAPTOPS_FAILURE";

const GET_WATCHES_REQUEST = "GET_WATCHES_REQUEST";
const GET_WATCHES_SUCCESS = "GET_WATCHES_SUCCESS";
const GET_WATCHES_FAILURE = "GET_WATCHES_FAILURE";

const GET_MOBILES_REQUEST = "GET_MOBILES_REQUEST";
const GET_MOBILES_SUCCESS = "GET_MOBILES_SUCCESS";
const GET_MOBILES_FAILURE = "GET_MOBILES_FAILURE";

const GET_PRODUCT_REQUEST = "GET_PRODUCT_REQUEST";
const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
const GET_PRODUCT_FAILURE = "GET_PRODUCT_FAILURE";

let getProductDetails = (productId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_PRODUCT_REQUEST });
      //consume API
      let response = await axios.get(
        `http://localhost:8000/product/${productId}`
      );
      console.log(response);
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_PRODUCT_FAILURE, payload: error });
    }
  };
};

let getMobileAction = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_MOBILES_REQUEST });
      //consume API
      let response = await axios.get(`http://localhost:8000/product/mobiles`);
      dispatch({ type: GET_MOBILES_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_MOBILES_FAILURE, payload: error });
    }
  };
};
let getLaptopAction = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_LAPTOPS_REQUEST });
      //consume API
      let response = await axios.get(`http://localhost:8000/product/laptops`);
      dispatch({ type: GET_LAPTOPS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_LAPTOPS_FAILURE, payload: error });
    }
  };
};

let getWatchAction = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_WATCHES_REQUEST });
      //consume API
      let response = await axios.get(`http://localhost:8000/product/watches`);
      dispatch({ type: GET_WATCHES_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_WATCHES_FAILURE, payload: error });
    }
  };
};

let uploadAction = (product, history) => {
  return async (dispatch) => {
    try {
      dispatch({ type: UPLOAD_REQUEST });
      let config = {
        headers: {
          "content-type": "application/json",
        },
      };
      let response = await axios.post(
        `http://localhost:8000/product/upload`,
        JSON.stringify(product),
        config
      );
      dispatch({ type: UPLOAD_SUCCESS, payload: response.data });
      history.push("/");
    } catch (errors) {
      dispatch({ type: UPLOAD_FAILURE, payload: errors });
    }
  };
};
export {
  uploadAction,
  getLaptopAction,
  getWatchAction,
  getMobileAction,
  getProductDetails,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
  GET_MOBILES_REQUEST,
  GET_MOBILES_SUCCESS,
  GET_MOBILES_FAILURE,
  GET_LAPTOPS_REQUEST,
  GET_LAPTOPS_SUCCESS,
  GET_LAPTOPS_FAILURE,
  GET_WATCHES_REQUEST,
  GET_WATCHES_SUCCESS,
  GET_WATCHES_FAILURE,
  UPLOAD_REQUEST,
  UPLOAD_SUCCESS,
  UPLOAD_FAILURE,
};
