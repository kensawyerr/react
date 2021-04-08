import { useEffect } from "react";
import $ from "jquery";

function Login() {
  useEffect(() => {
    $("label").addClass("active");
  }, []);

  return (
    <div className="row">
      <div className="col offset-l3 l6">
        <form>
          <h1>Please Login</h1>
          <div className="input-field col s6">
            <input
              placeholder="Placeholder"
              id="first_name"
              type="text"
              className="validate"
            />
            <label htmlFor="first_name">Username</label>
          </div>
          <div className="input-field col s6">
            <input
              placeholder="Placeholder"
              id="first_name"
              type="password"
              className="validate"
            />
            <label htmlFor="first_name">Password</label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
