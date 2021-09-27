import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/Register";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <div className="left-container">
            <Navbar />
          </div>
          <div className="right-container">
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path='/about' component = {About} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
