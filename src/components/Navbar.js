import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App.css";
import Home from "./Home";
import Login from "./login";
import Register from "./Register";

const Navbar = () => {
  return (
   <Router>
    
      <nav>
        <img className="logo" src="logo.svg" alt="logo" />

        <div className="boxes">
          <div className="box">
            <h2>Contact us</h2>
          </div>

          <div className="box">
            <h2>About us</h2>
          </div>
          <div className="box">
            <h2>Features</h2>
          </div>
          <div className="box">
            <h2>Register</h2>
          </div>
        </div>
      </nav></Router>

  );
};

export default Navbar;
