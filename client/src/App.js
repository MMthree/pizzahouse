import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import NavDivider from "./components/NavDivider";
import NotFound from "./components/NotFound";
import AppFooter from "./components/AppFooter";

// Context
import { StoreProvider } from "./context/YourStoreContext";
import { ShoppingProvider } from "./context/ShoppingCartContext";

// Pages
import home from "./pages/home";
import deals from "./pages/deals";
import menu from "./pages/menu";
import cart from "./pages/cart";
import findStore from "./pages/findStore";
import faq from "./pages/faq";
import terms from "./pages/terms";

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
                <Route exact path="/find-store" component={findStore} />
                <Route exact path="/faq" component={faq} />
                <Route exact path="/terms-of-use" component={terms} />
                <Route exact path='*' component={NotFound} />
              </Switch>
              <AppFooter />
            </div>
          </Router>
        </div>
      </ShoppingProvider>
    </StoreProvider>
  );
}

export default App;
