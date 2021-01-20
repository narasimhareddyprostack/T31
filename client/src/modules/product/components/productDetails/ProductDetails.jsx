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
        <section className="p-3 bg-primary text-center">
          <div className="container">
            <div className="row">
              <div className="col">
                <h3>Product Details</h3>
              </div>
            </div>
          </div>
        </section>
        {/* <pre>{JSON.stringify(product)}</pre> */}
        <section>
          <div className="container">
            <div className="row mt-4">
              <div className="col-md-5">
                <img src={product.image} />
              </div>
              <div className="col-md-7">
                <h2> Name: {product.name} </h2>
                <h4> Brand: {product.brand} </h4>
                <h4> Price:&#8377; {product.price} </h4>
                <button className="btn btn-success btn-sm">Add To Cart</button>
                <p> {product.desc}</p>
                <p> {product.usage}</p>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default ProductDetails;
