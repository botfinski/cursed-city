import React, { useRef } from "react";
import Screen from "../../components/Screen/Screen";
import {  NavLink } from "react-router-dom";

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


function PickInitiativeTokens({selectedHeroes, heroes, heroesTokens, setHeroesTokens}) {
  console.log(selectedHeroes);
  // console.log(tokens);
  // console.log(heroesTokens);s

  const moveToken = (direction, i) => {
    console.log(`${i}: ${direction}`)
  }

  return (
    <Screen className="PickInitiativeTokens" >
      <NavLink to="/pick-heroes" className="Back-Button">Back</NavLink>

      <h1>Pick Initiative Tokens</h1>

      <div className='ListContainer'>

        <ul>
          {
            tokens.map((token, i) => (
              <li>
                {token.name}: {selectedHeroes[i].name}

                <div>
                  <button onClick={() => moveToken('up', i)}>up</button>
                  <button onClick={() => moveToken('down', i)}>down</button>
                </div>
              </li>
            ))
          }
        </ul>

        {
          heroesTokens.length === 4 ? <NavLink to="/aaaa" >aaa</NavLink> : null
        }
      </div>
    </Screen>
  );
}

export default PickInitiativeTokens;

