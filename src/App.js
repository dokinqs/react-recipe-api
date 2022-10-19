import React from "react";
// import { BrowserRouter, NavLink } from "react-router-dom";
import { HashRouter, NavLink } from "react-router-dom";
import Cuisines from "./components/Cuisines";
import Pages from "./routes/Pages";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <HashRouter>
        <NavLink to={"/"}>
          <h1 className="home-logo">Gud Recipes</h1>
          <h5 className="home-sub">for your gut</h5>
        </NavLink>
        <Search />
        <Cuisines />

        <Pages />
      </HashRouter>
    </div>
  );
}

export default App;
