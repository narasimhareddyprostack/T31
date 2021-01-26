// HTTP Header - to update
import Axios from "axios";

let setAuth = (token) => {
  if (token) {
    Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete Axios.defaults.headers.common["Authorization"];
  }
};

export { setAuth };
