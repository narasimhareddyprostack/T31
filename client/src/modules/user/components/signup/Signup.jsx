import React from "react";
let Signup = () => {
  return (
    <React.Fragment>
      <section className="p-3 bg-warning">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="h3">
                <p>
                  <i className="fa fa-sign-in-alt"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4 m-auto">
              <div className="card">
                <div className="card-header">
                  <h4> Sign up - Form </h4>
                </div>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="User Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group">
                      <input type="submit" className="btn btn-success btn-sm" />
                    </div>
                  </form>
                  <small>
                    Don't ?
                    <a href="/user/login">
                      <i className="fa fa-sign-in-alt"></i>
                    </a>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Signup;
