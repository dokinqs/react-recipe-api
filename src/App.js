import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Cuisines from "./components/Cuisines";
import Pages from "./routes/Pages";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <Router>
        <NavLink to={"/"}>
          <h1 className="home-logo">Recipes</h1>
        </NavLink>
        <Search />
        <Cuisines />
        <Pages />
      </Router>
    </div>
  );
}

export default App;
