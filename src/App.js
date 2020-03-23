import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import WorldWide from "./components/WorldWide";
import Countries from "./components/Countries";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="jumbotron">
        <div className="row">
          <WorldWide />
          <Countries />
        </div>
      </div>
    </Router>
  );
}

export default App;
