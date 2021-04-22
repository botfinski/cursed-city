import React from "react";
import Screen from "../../components/Screen/Screen";
import {  NavLink } from "react-router-dom";



function History({history}) {

console.log(history)


  return (
    <Screen  className="History">
       <header>
        <h1>
              History
          </h1>
          <ul>
            <li><NavLink to="/stats">Back</NavLink></li>
          </ul>
       </header>



       {
         history.map(entry => {
           return(
             <>
              <p>Type: {entry.type}</p>
              <p>Map: {entry.map}</p>
              <p>Extraction event: {entry.extractionEvent}</p>
             </>
           )
         })
       }
    </Screen>
  );
}

export default History;

