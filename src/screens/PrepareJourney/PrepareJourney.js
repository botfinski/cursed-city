import React from "react"
import Screen from "../../components/Screen/Screen"
import { NavLink } from "react-router-dom"

function PrepareJourney({}) {
  return (
    <Screen className="PrepareJourney">
      <NavLink to="/pick-heroes" className="Back-Button">
        Back
      </NavLink>
      <h1>Prepare Journey</h1>

      <ol>
        <li>Pick initiative tokens</li>
        <li>Set up Skyvessel board</li>
        <li>Load Quest Data fear/influence?</li>
        <li>Build discovery deck - remove realmstone cards</li>
        <li>Place combat track</li>
        <li>Shuffle encouter cards, draw them and deploy hostiles</li>
      </ol>
    </Screen>
  )
}

export default PrepareJourney
