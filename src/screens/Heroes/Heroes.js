import React from "react";
import Screen from "../../components/Screen/Screen";
import {  NavLink } from "react-router-dom";
import "./Hero.scss"



function Hero({hero}) {
  return(
    <div className='Hero'>
      <h2>{hero.name}</h2>
      <p>level: {hero.level}</p>
      <p>experience: {hero.experience}</p>

    </div>
  )
}


function Heroes({heroes}) {

  return (
    <Screen className="Heroes" >
        <h1>
            Heroes
        </h1>
        <ul>
            <li><NavLink to="/stats">Back</NavLink></li>
        </ul>


        {
         heroes.map((hero,i) => (
            <Hero hero={hero} key={i}/>
          ))
        }
    </Screen>
  );
}

export default Heroes;

