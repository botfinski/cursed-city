import React from "react";
import Screen from "../../components/Screen/Screen";
import { NavLink } from "react-router-dom";

import "./PickHeroes.scss";

function HeroCheckbox({name, id, selectHeroes, selectedHeroes}) {
  const selectHero = (id) => {
    if(!selectedHeroes.includes(id)) {
      selectHeroes(selectedHeroes => [...selectedHeroes, id]);
    } else {
      selectHeroes(selectedHeroes => selectedHeroes.filter(arrayId => arrayId !== id))
    }
  };

  // console.log(selectedHeroes)

  return(
    <>
      <input 
        type="checkbox" 
        id={id}
        name='heroes'
        onClick={() => selectHero(id)}
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
    <li className='Hero'>
      <HeroCheckbox 
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
  console.log(selectedHeroes)

  return (
    <Screen className="Journey-Set-Up" >
      <NavLink to="/pick-journey" className="Back-Button">Back</NavLink>
      <h1>
        Pick Heroes
      </h1>

      <p>heroes {selectedHeroes.length}</p>

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

