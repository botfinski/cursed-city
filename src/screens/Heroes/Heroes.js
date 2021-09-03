import React from "react"
import Screen from "../../components/Screen/Screen"
import { NavLink } from "react-router-dom"
import "./Hero.scss"

function Hero({ hero, save }) {
  console.log(save)
  return (
    <div className="Hero">
      <h2>{hero.name}</h2>
      <p>Level: {save.level}</p>
      <p>Experience: {save.experience}</p>
      <p>Armor: {`${!save.armor && "none"}`}</p>
      <p>Weapon: {`${!save.weapon && "none"}`}</p>
      <p>Item carried: {`${!save.itemCarried && "none"}`}</p>
    </div>
  )
}

function Heroes({ heroes, save }) {
  // console.log(heroes)
  return (
    <Screen className="Heroes">
      <NavLink to="/stats" className="Back-Button">
        Back
      </NavLink>

      <h1>Heroes</h1>

      {heroes.map((hero, i) => {
        let heroSave = save.heroes[hero.id]

        // console.log(hero)
        // console.log(heroSave)
        return <Hero hero={hero} key={i} save={heroSave} />
      })}
    </Screen>
  )
}

export default Heroes
