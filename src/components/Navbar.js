import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App.css";
import Login from "../pages/login/login";
import Register from "../pages/register/register";

const Navbar = () => {
  return (
    <navbar>
      <div>
        <img className="logo" src="logo.svg" alt="logo" />
      </div>
      <div className="boxes">
        <Router>
          <div className="box">
            <Link to="Login">
              
              <h2>Contact us</h2>
            </Link>
          </div>

          <div className="box">
            <Link to="/Login">
              {" "}
              <h2>About us</h2>
            </Link>
          </div>
          <div className="box">
            <Link to="/Login">
              <h2>Features</h2>
            </Link>
          </div>
          <div className="box">
            <Link to="/Login">
              {" "}
              <h2>Register</h2>
            </Link>
          </div>
          <div className="box"></div>
        </Router>
      </div>
    </navbar>
  );
};
export default Navbar;
