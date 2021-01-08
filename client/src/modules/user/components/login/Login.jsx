import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getLoginAction } from "../../../../redux/user/user.actions";
let Login = () => {
  let [user, setUser] = useState({ email: "", password: "" });
  let dispatch = useDispatch();
  let history = useHistory();
  let inputHandler = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };
  let submitHandler = (event) => {
    console.log(user);
    //dispatch Action
    dispatch(getLoginAction(user, history));
    event.preventDefault();
  };
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
                  <h4> Login Form </h4>
                </div>
                <div className="card-body">
                  <form onSubmit={submitHandler}>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        value={user.email}
                        onChange={inputHandler}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        value={user.password}
                        onChange={inputHandler}
                      />
                    </div>
                    <div className="form-group">
                      <input type="submit" className="btn btn-success btn-sm" />
                    </div>
                  </form>
                  <small>
                    Don't ?
                    <a href="/user/signup">
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
export default Login;
