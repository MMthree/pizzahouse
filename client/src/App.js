import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import NavDivider from "./components/NavDivider";

// Pages
import home from "./pages/home";
import deals from "./pages/deals";

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


function App() {
  return (
    <div>
      <AppNavbar />
      <NavDivider />
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={home} />      
            <Route exact path="/deals" component={deals} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
