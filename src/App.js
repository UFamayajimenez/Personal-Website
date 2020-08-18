import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./views/Home/Home";
import NavBar from "./views/Navbar/Navbar";

function App() {
  return (
    <div>
    <Router>
    <NavBar/>
      <Switch>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
  </Router>
  </div>
);
}

export default App;
