import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signin from "./components/signin/Signin"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/signin" component={Signin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
