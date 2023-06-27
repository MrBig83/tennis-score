// import { useState } from 'react'
import "./ScoreAdjust.css"
function ScoreAdjust() {
  // const [count, setCount] = useState(0)


    //Gör score-states här för att spara till efterliggande konponenter
    //Poäng som visas mellan knapparna skall vara samma som på scoreboard

  return (
    <div className="scoreAdjust">
    <p>Välj set:</p>

    <p>Justera poäng</p>
        <div className="scoreAdjustPlayer1">
            <p className="name1">Namn på spelare 1</p>
            <>
                <button>-</button>
                <p>0</p>
                <button>+</button>
            </>
        </div>
        <div className="scoreAdjustPlayer2">
            <p className="name1">Namn på spelare 2</p>
            <>
                <button>-</button>
                <p>0</p>
                <button>+</button>
            </>
        </div>

    
    </div>
  )
}

export default ScoreAdjust