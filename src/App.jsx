// import { useState } from 'react'
import './App.css'


import PlayerNameInput from "./assets/components/PlayerNameInput/PlayerNameInput"
import ScoreAdjust from './assets/components/ScoreAdjust/ScoreAdjust'
import ScoreBoard from './assets/components/ScoreBoard/ScoreBoard'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
    
      <p>Hej hej. Nej, detta ska inte vara här. Här vill jag bara importera saker. Eller till o med EN sak, som i sin tur importerar resten.</p>
      <PlayerNameInput />
      <ScoreAdjust />
      <ScoreBoard />
      
      </div>
    </>
  )
}

export default App
