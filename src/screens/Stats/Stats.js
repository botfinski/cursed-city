import React from "react";
import Screen from "../../components/Screen/Screen";
import { NavLink } from "react-router-dom";

function Stats({children, stats}) {
  return (
    <Screen className="Stats">
      <NavLink to="/" className="Back-Button">Main Menu</NavLink>
      <h1>
        Stats
      </h1>
      
      <p>Fear: {stats.fear}</p>
      <p>Influence: {stats.influence}</p>

      <ul>
        <li><NavLink to="/heroes">Heroes</NavLink></li>
        <li><NavLink to="/history">History</NavLink></li>
      </ul>
    </Screen>
  );
}

export default Stats;

