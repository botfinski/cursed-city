import React from "react";
import Screen from "../../components/Screen/Screen";
import { NavLink } from "react-router-dom";



function Stats({children, stats}) {


  return (
    <Screen className="Stats" >
        <h1>
            Stats
        </h1>
        <ul>
            <li><NavLink to="/">Main Menu</NavLink></li>
            <li><NavLink to="/heroes">Heroes</NavLink></li>
            <li><NavLink to="/history">History</NavLink></li>
        </ul>

        <p>Fear: {stats.fear}</p>
        <p>Influence: {stats.influence}</p>
    </Screen>
  );
}

export default Stats;

