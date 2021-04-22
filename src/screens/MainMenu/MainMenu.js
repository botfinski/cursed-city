import React from "react";
import { NavLink } from "react-router-dom";
import Screen from "../../components/Screen/Screen"




function MainMenu({children}) {
  return (
    <Screen className="MainMenu" >
      <h1>
          Main Menu
      </h1>
      <ul>
        <li><NavLink to="/stats">Stats</NavLink></li>
        <li><NavLink to="/new-game">New Game</NavLink></li>
      </ul>
    </Screen>
  );
}

export default MainMenu;

