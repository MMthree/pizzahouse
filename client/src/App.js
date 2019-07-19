import React from 'react';
import SidebarMenu from "./components/SidebarMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


function App() {
  return (
    <div className="App">
      <div id="outer-container">
        <SidebarMenu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
        <main id="page-wrap">
          .
          .
          .
        </main>
      </div>
    </div>
  );
}

export default App;
