import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import NavDivider from "./components/NavDivider";

// Pages
import home from "./pages/home";
import deals from "./pages/deals";
import menu from "./pages/menu";
import contactUs from "./pages/contactUs";
import faq from "./pages/faq";
import terms from "./pages/terms";

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


function App() {
  return (
    <div>
      <Router>
        <AppNavbar />
        <NavDivider />
        <div className="container">
          <Switch>
            <Route exact path="/" component={home} />      
            <Route exact path="/deals" component={deals} />
            <Route exact path="/menu/:food" component={menu} />
            <Route exact path="/contact" component={contactUs} />
            <Route exact path="/faq" component={faq} />
            <Route exact path="/terms-of-use" component={terms} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
