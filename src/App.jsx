import './App.css'

import PlayerNameInput from "./assets/components/PlayerNameInput/PlayerNameInput"
import ScoreAdjust from './assets/components/ScoreAdjust/ScoreAdjust'
import ScoreBoard from './assets/components/ScoreBoard/ScoreBoard'


//import React from 'react';

import ReactDOM from 'react-dom'
import { NameProvider } from './context/NameContext';

function App() {
  ReactDOM.render(
    <NameProvider>
      <PlayerNameInput />
      <ScoreAdjust />
      <ScoreBoard />
    </NameProvider>,
    document.getElementById('root')
  );
}
export default App;

