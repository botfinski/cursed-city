import React, { useRef } from "react";
import Screen from "../../components/Screen/Screen";
import {  NavLink } from "react-router-dom";

import './PickInitiativeTokens.scss';

const tokens = [
  {
    name: "Player-1",
    disabled: false
  },
  {
    name: "Player-2",
    disabled: false
  },
  {
    name: "Player-3",
    disabled: false
  },
  {
    name: "Player-4",
    disabled: false
  }
];

// function TokenSelector({hero, setHeroesTokens, heroesTokens}) {
//   // console.log(heroesTokens)

//   const pickToken = (tokenName, heroId) => {
//     // console.log(tokenName)
//     // console.log(heroId)

//     if(heroesTokens.length === 0) {
//       setHeroesTokens(heroesTokens => [...heroesTokens, {tokenName, heroId}]);
//     } else {
//       if(heroesTokens.some(item => item.heroId === heroId)) {
//         // console.log('jest ten hero')
//         // console.log(heroesTokens.some(item => item.heroId === heroId))
//         let item = heroesTokens.find(item => item.heroId === heroId)
//         // console.log(tokenName)
//         item.tokenName = tokenName;
//         // console.log(heroesTokens)
//         setHeroesTokens(heroesTokens => [...heroesTokens]);
//       } else if(heroesTokens.some(item => item.tokenName === tokenName)) {
//         console.log('jest ten token');

//         let item = heroesTokens.find(item => item.tokenName === tokenName)
//         item.heroId = heroId;


//         console.log(inputEl.current)
//       }
//     }









//     // if(heroesTokens.some((element) => element.tokenName === tokenName)) {
//     //   console.log(element)
//     // }



//     // console.log(heroesTokens.some(item => item.name === tokenName))
//     // console.log(heroesTokens.some(item => item.id === heroId) && heroesTokens.some(item => item.name === tokenName))
   
    
//     // console.log(heroesTokens.some(item => item.token === token.name))


//     // if(!heroesTokens.some(item => item.heroId === hero.id)) {
//     //   if(!heroesTokens.some(item => item.token === token.name)) {
//     //     setHeroesTokens(heroesTokens => [...heroesTokens, tokenObj]);
//     //   } else {
//     //     // console.log('hest juz token')
//     //     setHeroesTokens(heroesTokens => heroesTokens.filter(arrayId => arrayId === token.name));
//     //     setHeroesTokens(heroesTokens => [...heroesTokens, tokenObj]);
//     //   }
      
//     // } else {
//     //   setHeroesTokens(heroesTokens => heroesTokens.filter(arrayId => arrayId === hero.id))
//     //   setHeroesTokens(heroesTokens => [...heroesTokens, tokenObj]);
//     // }

//     console.log(heroesTokens)

//   }

//   const inputEl = useRef(null);

//   return(
//     <ul className='Token-Selector'>
//       {
//         tokens.map((token,i) => (
//           <li>
//             <input 
//               type="radio"
//               name={`${hero.id}-token`}
//               id={`${hero.id}-player-${i}`} 
//               onChange={() => pickToken(token.name, hero.id)}
//               ref={inputEl}
//             />
//             <label 
//               htmlFor={`${hero.id}-player-${i}`} 
//             > 
//               {token.name}
//             </label>
//           </li>
//         ))
//       }
//     </ul>
//   )
// }

function PickInitiativeTokens({selectedHeroes, heroes, heroesTokens, setHeroesTokens}) {
  // console.log(selectedHeroes);
  // console.log(tokens);
  // console.log(heroesTokens);

  return (
    <Screen className="PickInitiativeTokens" >
      <NavLink to="/pick-heroes" className="Back-Button">Back</NavLink>

      <h1>Pick Initiative Tokens</h1>

      <div className='ListContainer'>

        <ul>
          {
            selectedHeroes.map((hero,i) => (
              <li key={i} className="Hero" >
                <h2>{hero.name}</h2>

                {/* <TokenSelector 
                  hero={hero}
                  setHeroesTokens={setHeroesTokens}
                  heroesTokens={heroesTokens}
                /> */}
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

