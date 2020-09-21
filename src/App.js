import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signin from "./components/signin/Signin"
import Profile from "./components/profile/Profile"
import Home from "./components/home/Home"
import CreatePost from "./components/createPost/CreatePost"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/" component={Home} />
          <Route exact path="/createPost" component={CreatePost} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
