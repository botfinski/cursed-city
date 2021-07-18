import React, { useEffect } from "react";
import Screen from "../../components/Screen/Screen";
import { NavLink } from "react-router-dom";

import './PickInitiativeTokens.scss';

const tokens = [
  {
    name: "Player-1"
  },
  {
    name: "Player-2"
  },
  {
    name: "Player-3"
  },
  {
    name: "Player-4"
  }
];

function PickInitiativeTokens({selectedHeroes, heroesTokens, setHeroesTokens}) {
  console.log(heroesTokens)


  useEffect(() => {
    setHeroesTokens(heroesTokens => [...selectedHeroes]);
  }, [selectedHeroes]);

  const moveToken = (direction, i) => {
    let moveToIndex;

    if(direction === "up") {
      moveToIndex = i - 1;
    } else if(direction === "down") {
      moveToIndex = i + 1;
    }

    let tempItem = heroesTokens[moveToIndex];
    heroesTokens[moveToIndex] = heroesTokens[i];
    heroesTokens[i] = tempItem;

    setHeroesTokens(heroesTokens => [...heroesTokens]);
  }


  return (
    <Screen className="PickInitiativeTokens" >
      <NavLink to="/pick-heroes" className="Back-Button">Back</NavLink>

      <h1>Pick Initiative Tokens</h1>

      {/* <ul className="TokensList">
        {
          tokens.map((token, i) => (
            <li key={token.name}>
              {i}: {heroesTokens[i].name}

              <div className="ButtonContainer">

                <button 
                  onClick={() => moveToken("up", i)}
                  disabled={i !== 0 ? "" : "disabled"}
                >
                  ▲
                </button>

                <button
                  onClick={() => moveToken("down", i)}
                  disabled={i !== heroesTokens.length - 1 ? "" : "disabled"}
                >
                  ▼
                </button>

              </div>
            </li>
          ))
        }
      </ul> */}

      <NavLink to="/prepare-combat">Prepare Combat</NavLink>
    </Screen>
  );
}

export default PickInitiativeTokens;

