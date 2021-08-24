import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "../register/register";
import "./login.css";
import Navbar from "../../components/Navbar";

export const Login = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Register} />
        <Route path="/register" component={Register} />
        <Route path="login" component={Login} />
      </Switch>

      <div className="App">
        <header className="App-header">
          <div className="left-container">
            <Navbar />
            </div>

          <div className="right-container">
            <div class="register">
              <h1>Login</h1>
              <p className="sub-text">Please login to use Arappnid.</p>

              <form className="form-container">
                <div className="form-inner">
                  <div className="form-inner">
                    <label>Username</label>
                    <input type="textbox" className="form-input"></input>
                  </div>
                  <div class="form-inner">
                    <div className="form-inner">
                      <label>Password</label>
                      <input type="password" className="form-input"></input>
                    </div>{" "}
                    <div>
                      <div className="button-container">
                        <button className="submit">Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div></div>
              </form>
              <h1>Arappnid</h1>
              <div className="reg-benefits-cont">
                <p>
                  Ipsum eiusmod fugiat commodo sit. Nulla dolor deserunt et
                  officia nulla. Eiusmod sint do aliquip ullamco amet minim
                  velit ut mollit qui. Veniam tempor quis nostrud sit ut et
                  incididunt commodo ut dolor dolor non est excepteur. Velit id
                  sunt consequat sint deserunt magna Lorem nostrud in laborum
                  velit voluptate. Magna ut sit non eu nostrud. Amet magna qui
                  cupidatat quis culpa amet elit culpa.
                </p>
              </div>
            </div>
          </div>
        </header>
      </div>
    </Router>
  );
};

export default Login;
