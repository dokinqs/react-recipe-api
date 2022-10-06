import React from "react";
import Vegeta from "../components/Vegeta";
import Popular from "../components/Popular";

const Home = () => {
  return (
    <div className="home-page">
      <Popular />
      <Vegeta />
    </div>
  );
};

export default Home;
