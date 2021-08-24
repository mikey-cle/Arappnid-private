import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <nav>
      <Router>
        <div>
          <img className="logo" src="logo.svg" alt="logo" />
        </div>
        <div className="boxes">
          <Switch>
            <div className="box">
              <h2>Contact us</h2>
            </div>
          </Switch>
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
      </Router>
    </nav>
  );
};
export default Navbar;
