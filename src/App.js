import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./views/Home/Home";
import Projects from "./views/Projects/Projects"
import NavBar from "./views/Navbar/Navbar";
import Footer from "./views/Footer/Footer";

function App() {
  return (
    <div>
    <Router>
    <NavBar/>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/projects">
          <Projects/>
        </Route>
      </Switch>
      <Footer/>
  </Router>
  </div>
);
}

export default App;
