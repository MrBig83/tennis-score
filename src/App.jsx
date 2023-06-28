import './App.css'

import PlayerNameInput from "./assets/components/PlayerNameInput/PlayerNameInput"
import ScoreAdjust from './assets/components/ScoreAdjust/ScoreAdjust'
import ScoreBoard from './assets/components/ScoreBoard/ScoreBoard'


//import React from 'react';

import ReactDOM from 'react-dom'
import { NameProvider } from './context/NameContext';
import { ScoreProvider } from './context/ScoreContext';

function App() {
  ReactDOM.render(
    <NameProvider>
      <PlayerNameInput />
      <ScoreProvider>
        <ScoreAdjust />
        <ScoreBoard />
      </ScoreProvider>
    </NameProvider>,
    document.getElementById('root')
  );
}
export default App;

