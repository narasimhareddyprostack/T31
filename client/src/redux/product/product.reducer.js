import {
  UPLOAD_REQUEST,
  UPLOAD_SUCCESS,
  UPLOAD_FAILURE,
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
    default:
      return state;
  }
};

export default productReducer;
