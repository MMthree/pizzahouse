import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import NavDivider from "./components/NavDivider";
import NotFound from "./components/NotFound";

// Context
import { ShoppingProvider } from "./context/ShoppingCartContext";

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
    <ShoppingProvider>
      <div>
        <Router>
          <AppNavbar />
          <NavDivider />
          <div className="container">
            <Switch>
              <Route exact path="/" component={home} />      
              <Route exact path="/deals" component={deals} />
              <Route exact path="/menu/:food(pizza|wings|sides|desserts|drinks)" component={menu} />
              <Route exact path="/contact" component={contactUs} />
              <Route exact path="/faq" component={faq} />
              <Route exact path="/terms-of-use" component={terms} />
              <Route exact path='*' component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    </ShoppingProvider>
  );
}

export default App;
