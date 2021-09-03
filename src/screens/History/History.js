import React from "react"
import Screen from "../../components/Screen/Screen"
import { NavLink } from "react-router-dom"

function History({ history }) {
  return (
    <Screen className="History">
      <NavLink to="/stats" className="Back-Button">
        Back
      </NavLink>
      <h1>History</h1>

      <ul>
        {history.map((entry, i) => {
          return (
            <li key={i}>
              <p>Type: {entry.type}</p>
              <p>Map: {entry.map}</p>
              <p>Extraction event: {entry.extractionEvent}</p>
            </li>
          )
        })}
      </ul>
    </Screen>
  )
}

export default History
