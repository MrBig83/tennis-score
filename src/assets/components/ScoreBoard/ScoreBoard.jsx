import "./ScoreBoard.css"
import { useContext } from 'react';
import { NameContext } from "../../../context/NameContext";
// import { useState } from 'react'

function ScoreBoard() {
    const { name1, name2 } = useContext(NameContext);
  // const [count, setCount] = useState(0)

  return (
    <div className="ScoreBoard">

      <div className="scoresPlayer1">

        <p className="namePlayer1">{name1}</p>
        <p className="gamePlayer1">0 </p>
        <p className="set1Player1">0 </p>
        <p className="set2Player1">0 </p>
        <p className="set3Player1">0 </p>
        
        
      </div>
      
      <div className="scoresPlayer2">
        <p className="namePlayer2">{name2} </p>
        <p className="gamePlayer2">0 </p>
        <p className="set1Player2">0 </p>
        <p className="set2Player2">0 </p>
        <p className="set3Player2">0 </p>


      </div>
    </div>
  )
}

export default ScoreBoard