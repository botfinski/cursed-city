import React from "react";
import { BrowserRouter, Route} from "react-router-dom";
import MainMenu from "../../screens/MainMenu/MainMenu";
import NewJourney from "../../screens/NewJourney/NewJourney";
import Stats from "../../screens/Stats/Stats";
// import Screen from "../../components/Screen/Screen"
import History from "../../screens/History/History";
import Heroes from "../../screens/Heroes/Heroes";
import "./App.scss";
import heroes from "../../data/heroes.json"
import questStats from "../../data/quest.json"
import history from "../../data/history.json"


function App() {

  return (
    <BrowserRouter>
      <div className="App">
          
        <Route exact path="/">
          <MainMenu />
        </Route>

        <Route path="/stats">
          <Stats stats={questStats} />
        </Route>

        <Route path="/new-game">
          <NewJourney />
        </Route>

        <Route path="/history">
          <History history={history} />
        </Route>

        <Route path="/heroes">
          <Heroes heroes={heroes}/>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;

