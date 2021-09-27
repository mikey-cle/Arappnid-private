import { Link } from "react-router-dom";
import "../App.css";
import Home from "./Home";
import Login from "./login";
import Register from "./Register";

const Navbar = () => {
  return (
    <nav>
      <img className="logo" src="logo.svg" alt="logo" />

      <div className="boxes">
        <div className="box">
          <h2>Contact us</h2>
        </div>

        <div className="box">
          <Link to="/login" style={{textDecoration: 'none'}}>
            <h2>Login</h2>
          </Link>
        </div>
        <div className="box">
          <Link to="/register" style={{textDecoration: 'none'}}>
            <h2>Register</h2>
          </Link>
        </div>
        <div className="box">
        <Link to='/about' style={{textDecoration: 'none'}}>  <h2>About us</h2></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
