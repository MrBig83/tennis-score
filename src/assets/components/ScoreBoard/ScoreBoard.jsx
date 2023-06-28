import "./ScoreBoard.css"
import { useContext } from 'react';
import { NameContext } from "../../../context/NameContext";
import { ScoreContext } from "../../../context/ScoreContext";

function ScoreBoard() {
  const { name1, name2 } = useContext(NameContext);
  const { scoreTranslate, 
    player1Set1,
    player1Set2,
    player1Set3,
    player2Set1,
    player2Set2,
    player2Set3,
    setPlayer1Set1
  } = useContext(ScoreContext)

let deuce = "";


if(player1Set1 && player2Set1 == 3){
  player1Set1 == player2Set1 ? deuce = "Deuce" : ""
}

if(player1Set1 == 4 && player2Set1 < 3){
  setPlayer1Set1(player1Set1 +1)
}



  return (
    <div className="ScoreBoard">
    <h1>Scoreboard:</h1>
      <div className="scoresPlayer1">
        <p className="namePlayer1">{name1}</p>
        <p className="gamePlayer1">0 </p>
        <p className="set1Player1">{scoreTranslate[player1Set1]} {deuce} </p>
        <p className="set2Player1">{scoreTranslate[player1Set2]} </p>
        <p className="set3Player1">{scoreTranslate[player1Set3]} </p>
        
        
      </div>
      
      <div className="scoresPlayer2">
        <p className="namePlayer2">{name2} </p>
        <p className="gamePlayer2">0 </p>
        <p className="set1Player2">{scoreTranslate[player2Set1]} </p>
        <p className="set2Player2">{scoreTranslate[player2Set2]} </p>
        <p className="set3Player2">{scoreTranslate[player2Set3]} </p>


      </div>
    </div>
  )
}

export default ScoreBoard