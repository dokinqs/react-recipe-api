import React from "react";
import { NavLink } from "react-router-dom";
import "./Cuisines.css";

const Cuisines = () => {
  return (
    <div className="cuisines-nav">
      <NavLink to={"cuisine/Chinese"}>
        <h6>Chinese</h6>
      </NavLink>
      <NavLink to={"cuisine/French"}>
        <h6>French</h6>
      </NavLink>
      <NavLink to={"cuisine/Indian"}>
        <h6>Indian</h6>
      </NavLink>
      <NavLink to={"cuisine/Italian"}>
        <h6>Italian</h6>
      </NavLink>
      <NavLink to={"cuisine/Korean"}>
        <h6>Korean</h6>
      </NavLink>
      <NavLink to={"cuisine/Middle+Eastern"}>
        <h6>Middle Eastern</h6>
      </NavLink>
      <NavLink to={"cuisine/Thai"}>
        <h6>Thai</h6>
      </NavLink>
      <NavLink to={"cuisine/Vietnamese"}>
        <h6>Vietnamese</h6>
      </NavLink>
    </div>
  );
};

export default Cuisines;
