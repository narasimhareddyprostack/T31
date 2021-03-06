import React, { useEffect } from "react";
import { getMobileAction } from "../../../../redux/product/product.actions";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
let Mobiles = () => {
  let dispatch = useDispatch();
  //how to read redux store
  let products = useSelector((state) => {
    return state.product;
  });

  let { product } = products;
  useEffect(() => {
    dispatch(getMobileAction());
  }, [dispatch]);

  //dispatch actions
  return (
    <React.Fragment>
      <section className="p-3 bg-primary text-center">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3>Trending Mobiles Data</h3>
            </div>
          </div>
        </div>
      </section>
      {/* <pre>{JSON.stringify(product)}</pre> */}
      <section>
        <div className="container">
          <div className="row mt-3">
            {product.map((singleProduct) => {
              return (
                <div className="col-md-3">
                  <div className="card">
                    <div className="card-header">
                      <Link to={`/product/${singleProduct._id}`}>
                        <img src={singleProduct.image} className="img-fluid" />
                      </Link>
                    </div>
                    <div className="card-body">
                      <ul className="list-group">
                        <li className="list-group-item">
                          {singleProduct.name}
                        </li>
                        <li className="list-group-item">
                          {singleProduct.price}
                        </li>
                        <li className="list-group-item">
                          <button className="btn btn-primary btn-sm">
                            Add Cart
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Mobiles;
