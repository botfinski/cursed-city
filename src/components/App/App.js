import React, { useState} from "react";
import { BrowserRouter, Route} from "react-router-dom";
import MainMenu from "../../screens/MainMenu/MainMenu";
import PickJourney from "../../screens/PickJourney/PickJourney";
import Stats from "../../screens/Stats/Stats";
import History from "../../screens/History/History";
import Heroes from "../../screens/Heroes/Heroes";
import PickHeroes from "../../screens/PickHeroes/PickHeroes";
import PickInitiativeTokens from "../../screens/PickInitiativeTokens/PickInitiativeTokens";
import PrepareCombat from "../../screens/PrepareCombat/PrepareCombat";

import heroes from "../../data/heroes.json"
import questStats from "../../data/quest.json"
import history from "../../data/history.json"
import save from "../../data/save.json"

import "./App.scss";


function App() {

  const [selectedjourneyType, selectJourneyType] = useState('');
  const [selectedHeroes, selectHeroes] = useState([]);
  const [heroesTokens, setHeroesTokens] = useState([]);
  const [nightfallToken, setNightfallToken] = useState(0);
  const [questToken, setQuestToken] = useState(0);


  return (
    <BrowserRouter>
      <div className="App">
          
        <Route exact path="/">
          <MainMenu />
        </Route>

        <Route path="/stats">
          <Stats stats={questStats} />
        </Route>

        <Route path="/history">
          <History history={history} />
        </Route>

        <Route path="/heroes">
          <Heroes heroes={heroes}/>
        </Route>

        <Route path="/pick-journey">
          <PickJourney 
            selectedjourneyType={selectedjourneyType}
            selectJourneyType={selectJourneyType}
          />
        </Route>

        <Route path="/pick-heroes">
          <PickHeroes 
            heroes={heroes}
            selectedHeroes={selectedHeroes}
            selectHeroes={selectHeroes}
            setHeroesTokens={setHeroesTokens}
          />
        </Route>

        <Route path="/pick-initiative-tokens">
          <PickInitiativeTokens 
            selectedHeroes={selectedHeroes}
            heroesTokens={heroesTokens}
            setHeroesTokens={setHeroesTokens}
          />
        </Route>

        <Route path="/prepare-combat">
          <PrepareCombat
            heroesTokens={heroesTokens}
            nightfallToken={nightfallToken}
            questToken={questToken}
            save={save}
          />
        </Route>
        
      </div>
    </BrowserRouter>
  );
}

export default App;

