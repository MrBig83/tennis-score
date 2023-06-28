import "./ScoreAdjust.css"
import { useContext } from 'react';
import { NameContext } from "../../../context/NameContext";

function ScoreAdjust() {
  const { name1, name2 } = useContext(NameContext);

    //Gör score-states här för att spara till efterliggande konponenter
    //Poäng som visas mellan knapparna skall vara samma som på scoreboard

  return (
    <div className="scoreAdjust">
    <p>Välj set:</p>

    <p>Justera poäng</p>
        <div className="scoreAdjustPlayer1">
            <p className="name1">{name1}</p>
            <>
                <button>-</button>
                <p>0</p>
                <button>+</button>
            </>
        </div>
        <div className="scoreAdjustPlayer2">
            <p className="name1">{name2}</p>
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