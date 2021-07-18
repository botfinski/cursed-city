import React from "react";
import Screen from "../../components/Screen/Screen";
import { NavLink } from "react-router-dom";


function PrepareCombat({heroesTokens}) {
  console.log(heroesTokens)



  return (
    <Screen className="PrepareCombat" >
      <NavLink to="/pick-initiative-tokens" className="Back-Button">Back</NavLink>

      <h1>Prepare Combat</h1>
    </Screen>
  );
}

export default PrepareCombat;