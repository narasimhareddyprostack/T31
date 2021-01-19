import {
  UPLOAD_REQUEST,
  UPLOAD_SUCCESS,
  UPLOAD_FAILURE,
  GET_LAPTOPS_REQUEST,
  GET_LAPTOPS_SUCCESS,
  GET_LAPTOPS_FAILURE,
  GET_WATCHES_REQUEST,
  GET_WATCHES_SUCCESS,
  GET_WATCHES_FAILURE,
  GET_MOBILES_REQUEST,
  GET_MOBILES_SUCCESS,
  GET_MOBILES_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
} from "./product.actions";
let initialProduct = {
  product: [],
  loading: "",
  errorMessage: "",
  singleProduct: {},
};
let productReducer = (state = initialProduct, action) => {
  let { type, payload } = action;
  switch (type) {
    case UPLOAD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPLOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        product: payload,
      };
    case UPLOAD_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case GET_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: payload,
      };
    case GET_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: payload,
      };
    case GET_MOBILES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_MOBILES_SUCCESS:
      return {
        ...state,
        loading: false,
        product: payload,
      };
    case GET_MOBILES_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: payload,
      };
    case GET_LAPTOPS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_LAPTOPS_SUCCESS:
      return {
        ...state,
        loading: false,
        product: payload,
      };
    case GET_LAPTOPS_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: payload,
      };
    case GET_WATCHES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_WATCHES_SUCCESS:
      return {
        ...state,
        loading: false,
        product: payload,
      };
    case GET_WATCHES_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: payload,
      };
    default:
      return state;
  }
};

export default productReducer;
