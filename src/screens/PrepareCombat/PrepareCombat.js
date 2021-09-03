import React from "react"
import Screen from "../../components/Screen/Screen"
import { NavLink } from "react-router-dom"

function PrepareCombat({ heroesTokens, nightfallToken, questToken, save }) {
  console.log(heroesTokens)
  console.log(save)

  return (
    <Screen className="PrepareCombat">
      <NavLink to="/pick-initiative-tokens" className="Back-Button">
        Back
      </NavLink>

      <h1>Prepare Combat</h1>

      <p>Nightfall token: {nightfallToken}</p>
      <p>Quest token: {questToken}</p>
      <br />
      <p>Fear: {save.quest.fear}</p>
      <p>Influence: {save.quest.influence}</p>
      <p>Gravestones: [ ]</p>
      <br />
      <p>
        Build discovery deck!
        <br />
        Deck rules...
      </p>
    </Screen>
  )
}

export default PrepareCombat
