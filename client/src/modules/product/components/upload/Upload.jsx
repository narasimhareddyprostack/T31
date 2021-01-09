//name, brand, image, price, qty, category, desc, usage
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadAction } from "../../../../redux/product/product.actions";
import { useHistory } from "react-router-dom";

let Upload = () => {
  let histroy = useHistory();
  let [product, setProduct] = useState({
    name: "",
    brand: "",
    image: "",
    price: "",
    qty: "",
    category: "",
    desc: "",
    usage: "",
  });
  let dispatch = useDispatch();
  let submitHandler = (event) => {
    console.log(product);
    dispatch(uploadAction(product, histroy));
    event.preventDefault();
  };
  let inputHander = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <React.Fragment>
      <section className="p-3 bg-info">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="h3">
                <p>
                  <i class="fa fa-upload" aria-hidden="true"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pl-3 mt-4">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <div className="h4">
                  <p>Please Upload Product</p>
                </div>
              </div>
              <div className="card-body">
                <form onSubmit={submitHandler}>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Product Name"
                      className="form-control"
                      name="name"
                      value={product.name}
                      onChange={inputHander}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Brand"
                      className="form-control"
                      name="brand"
                      value={product.brand}
                      onChange={inputHander}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Product Image"
                      className="form-control"
                      name="image"
                      value={product.image}
                      onChange={inputHander}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Price"
                      className="form-control"
                      name="price"
                      value={product.price}
                      onChange={inputHander}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="QTY"
                      className="form-control"
                      name="qty"
                      value={product.qty}
                      onChange={inputHander}
                    />
                  </div>
                  <div className="form-group">
                    <select
                      className="form-control"
                      onChange={inputHander}
                      name="category"
                    >
                      <option value=""> Select Category</option>
                      <option value="Mobiles"> Mobiles</option>
                      <option value="Laptops"> Laptops</option>
                      <option value="Watches"> Watches</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Product Description"
                      className="form-control"
                      value={product.desc}
                      name="desc"
                      onChange={inputHander}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Usage"
                      className="form-control"
                      value={product.usage}
                      name="usage"
                      onChange={inputHander}
                    />
                  </div>
                  <div className="form-group">
                    <input type="submit" className=" btn btn-success btn-sm" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Upload;
