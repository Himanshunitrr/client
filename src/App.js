import React from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
  {/*<Route exact path="/video/:videoName" component={Video} />*/}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
