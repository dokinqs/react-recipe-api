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
          <h1 className="home-logo">Gud Recipes</h1>
          <h5>for your gut</h5>
        </NavLink>
        <Search />
        <Cuisines />
        <Pages />
      </Router>
    </div>
  );
}

export default App;
