import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Cuisines from "./components/Cuisines";
import Pages from "./routes/Pages";

function App() {
  return (
    <div>
      <Router>
        <NavLink to={"/"}>
          <h1 className="home-logo">Recipes</h1>
        </NavLink>
        <Cuisines />
        <Pages />
      </Router>
    </div>
  );
}

export default App;
