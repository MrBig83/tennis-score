import PlayerNameInput from "./assets/components/PlayerNameInput/PlayerNameInput"
import ScoreAdjust from './assets/components/ScoreAdjust/ScoreAdjust'
import ScoreBoard from './assets/components/ScoreBoard/ScoreBoard'
import ReactDOM from 'react-dom'
import { NameProvider } from './context/NameContext';
import { ScoreProvider } from './context/ScoreContext';
import './App.css'

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

