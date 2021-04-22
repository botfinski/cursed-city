import React from "react";
import Screen from "../../components/Screen/Screen"
import {  NavLink } from "react-router-dom";

function NewJourney({children}) {
    return (
      <Screen className="NewJourney" >
        <h1>
            New Journey
        </h1>
        <ul>
            <li><NavLink to="/">Main Menu</NavLink></li>
        </ul>
      </Screen>
    );
  }

export default NewJourney;

