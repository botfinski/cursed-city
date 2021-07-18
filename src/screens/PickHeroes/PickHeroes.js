import React from "react";
import Screen from "../../components/Screen/Screen";
import { NavLink } from "react-router-dom";

import "./PickHeroes.scss";

function HeroCheckbox({hero, name, id, selectHeroes, selectedHeroes}) {
  const selectHero = (hero) => {
    if(!selectedHeroes.includes(hero)) {
      selectHeroes(selectedHeroes => [...selectedHeroes, hero]);
    } else {
      selectHeroes(selectedHeroes => selectedHeroes.filter(arrayId => arrayId !== hero))
    }
  };

  // console.log(selectedHeroes)
  
  return(
    <>
      <input 
        type="checkbox" 
        id={id}
        name='heroes'
        checked={selectedHeroes.includes(hero) ? "checked" : null}
        disabled={selectedHeroes.length === 4 && !selectedHeroes.includes(hero) ? "disabled" : null}
        onChange={() => selectHero(hero)}
      />
      <label 
        htmlFor={id}
      >
        {name}
      </label>
    </>
  )
}

function Hero({hero, selectHeroes, selectedHeroes}) {

  return(
    <li className="Hero">
      <HeroCheckbox 
        hero={hero}
        name={hero.name}
        id={hero.id}
        selectHeroes={selectHeroes}
        selectedHeroes={selectedHeroes}
      />
      {/* <p>level: {hero.level}</p>
      <p>experience: {hero.experience}</p> */}
    </li>
  )
}

function PickHeroes({heroes, selectHeroes, selectedHeroes}) {
  // console.log(selectedHeroes)

  return (
    <Screen className="PickHeroes" >
      <NavLink to="/pick-journey" className="Back-Button">Back</NavLink>
      <h1>
        Pick Heroes
      </h1>

      {/* <p>heroes {selectedHeroes.length}</p> */}

      <ul>
        {
          heroes.map((hero,i) => (
            <Hero 
              hero={hero} 
              key={i}
              selectHeroes={selectHeroes}
              selectedHeroes={selectedHeroes}
            />
          ))
        }
      </ul>

      {
        selectedHeroes.length === 4 ? <NavLink to="/pick-initiative-tokens" >Pick Initiative Tokens</NavLink> : null
      }

    </Screen>
  );
}

export default PickHeroes;

