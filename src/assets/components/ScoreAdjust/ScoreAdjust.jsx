import "./ScoreAdjust.css";
import { useContext } from 'react';
import { NameContext } from "../../../context/NameContext";
import { ScoreContext } from "../../../context/ScoreContext";

function ScoreAdjust() {
  const { name1, name2 } = useContext(NameContext);
  const { 
    player1Game, 
    setPlayer1Game,
    player2Game, 
    setPlayer2Game,
  } = useContext(ScoreContext)

  const addPointsPlayer1Game = () => {
    player1Game < 5 ? setPlayer1Game(player1Game +1) : ""
  }
  const decPointsPlayer1Game = () => {
    player1Game > 0 ? setPlayer1Game(player1Game -1) : ""
  }

  const addPointsPlayer2Game = () => {
    player2Game < 5 ? setPlayer2Game(player2Game +1) : ""
  }
  const decPointsPlayer2Game = () => {
    player2Game > 0 ? setPlayer2Game(player2Game -1) : ""
  }

  return (
    <div className="scoreAdjust">

    <p>Justera poäng</p>
        <div className="scoreAdjustPlayer1">
            <p className="name1">{name1}</p>
            <>
              <button onClick={decPointsPlayer1Game}>-</button>
              <p>{player1Game}</p>
              <button onClick={addPointsPlayer1Game}>+</button>
            </>
        </div>
        <div className="scoreAdjustPlayer2">
            <p className="name1">{name2}</p>
            <>
              <button onClick={decPointsPlayer2Game}>-</button>
              <p>{player2Game}</p>
              <button onClick={addPointsPlayer2Game}>+</button>
            </>
        </div>
    </div>
  )
}

export default ScoreAdjust