import React from "react";
import Screen from "../../components/Screen/Screen";
import {  NavLink } from "react-router-dom";


function PickInitiativeTokens({children, className}) {
  return (
    <Screen className="PickInitiativeTokens" >
      <NavLink to="/pick-heroes" className="Back-Button">Back</NavLink>

      <h1>Pick Initiative Tokens</h1>
    </Screen>
  );
}

export default PickInitiativeTokens;

