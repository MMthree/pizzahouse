import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import NavDivider from "./components/NavDivider";
import NotFound from "./components/NotFound";
import AppFooter from "./components/AppFooter";
import Github from "./components/GithubSource";

// Context
import { StoreProvider } from "./context/YourStoreContext";
import { ShoppingProvider } from "./context/ShoppingCartContext";

// Pages
import home from "./pages/home";
import deals from "./pages/deals";
import menu from "./pages/menu";
import cart from "./pages/cart";
import findStore from "./pages/findStore";
import checkout from "./pages/checkout";

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


function App() {
  return (
    <StoreProvider>
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
                <Route exact path="/cart" component={cart} />
                <Route exact path="/checkout" component={checkout} />
                <Route exact path="/find-store" component={findStore} />
                <Route exact path='*' component={NotFound} />
              </Switch>
              <AppFooter />
              <Github />
            </div>
          </Router>
        </div>
      </ShoppingProvider>
    </StoreProvider>
  );
}

export default App;
