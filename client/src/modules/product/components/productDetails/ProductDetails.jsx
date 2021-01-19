/*
How to read URL Data
http://localhost:3000/product/5fff08e9e3530c06e89164da
*/
import React from "react";
import { useParams } from "react-router-dom";

import { useEffect } from "react";
import { getProductDetails } from "../../../../redux/product/product.actions";
import { useDispatch, useSelector } from "react-redux";

function ProductDetails() {
  const { id } = useParams();
  let dispatch = useDispatch();

  let singleProduct = useSelector((state) => {
    return state.product;
  });

  let { product } = singleProduct;

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [id]);

  return (
    <div>
      <>
        <h1> Product Details Page {id} </h1>
        <pre>{JSON.stringify(product)}</pre>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <img src={product.image} />
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default ProductDetails;
