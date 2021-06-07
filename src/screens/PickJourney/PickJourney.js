import React from "react";
import Screen from "../../components/Screen/Screen"
import {  NavLink } from "react-router-dom";

import "./PickJourney.scss";

const journeyTypes = [
  {
    name: "Hunt",
    disabled: false
  },
  {
    name: "Scavenge",
    disabled: true
  },
  {
    name: "Deliverance",
    disabled: true
  },
  {
    name: "Decapitation",
    disabled: true
  }
]


function JourneyType({journeyType, selectJourneyType, selectedjourneyType}) {
  return(
    <li>
      <input 
        type="radio" 
        value={journeyType.name.toLowerCase()} 
        id={journeyType.name.toLowerCase()} 
        name="journey-type"
        disabled={journeyType.disabled ? "disabled" : null}
        checked={selectedjourneyType === journeyType.name.toLowerCase() ? "checked" : null}
        onChange={() => selectJourneyType(journeyType.name.toLowerCase())}
      />
      <label 
        htmlFor={journeyType.name.toLowerCase()} 
      > 
        {journeyType.name}
      </label>
    </li>
  )
}

function PickJourney({selectedjourneyType, selectJourneyType}) {
  console.log(selectedjourneyType)
  return (
    <Screen className="PickJourney" >
      <NavLink 
        to="/" 
        className="Back-Button"
        onClick={() => selectJourneyType('')}
      >
        Main Menu
      </NavLink>
      
      <h1>
        Pick Journey
      </h1>
      
      <ul className='Journey-Types-List'>
        {
          journeyTypes.map((journeyType,i) => (
            <JourneyType 
              journeyType={journeyType} 
              key={i}
              selectedjourneyType={selectedjourneyType}
              selectJourneyType={selectJourneyType}
            />
          ))
        }
      </ul>

      {
        selectedjourneyType !== '' ? <NavLink to="/pick-heroes" >Pick Heroes</NavLink> : null
      }
    </Screen>
  );
}

export default PickJourney;

