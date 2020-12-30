import React from "react";
let Upload = () => {
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
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Product Name"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Brand"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="file"
                      placeholder="Product Image"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Price"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="QTY"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <select className="form-control">
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
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Usage"
                      className="form-control"
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
