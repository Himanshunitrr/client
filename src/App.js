import React, {useEffect, createContext, useReducer} from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Signin from "./components/signin/Signin"
import Profile from "./components/profile/Profile"
import Home from "./components/home/Home"
import CreatePost from "./components/createPost/CreatePost"
import {reducer, initialState} from "./reducers/userReducer"

const UserContext = createContext()

const Routing = () => {
  const history = useHistory();
  return (
    <Switch>
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/" component={Home} />
      <Route exact path="/createPost" component={CreatePost} />
    </Switch>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{state, dispatch}}>
    <div className="App">
      <Router>
        <Navbar />
        <Routing/>
      </Router>
    </div>
    </UserContext.Provider>
  );
}

export default App;
