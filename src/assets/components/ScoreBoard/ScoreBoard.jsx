import "./ScoreBoard.css"
import { useContext } from 'react';
import { NameContext } from "../../../context/NameContext";
import { ScoreContext } from "../../../context/ScoreContext";

function ScoreBoard() {
  const { name1, name2 } = useContext(NameContext);
  const { 
    scoreTranslate, 
    setPlayer1Game, 
    player1Game,
    setPlayer2Game,
    player2Game,
    player1Set1,
    player1Set2,
    player1Set3,
    player2Set1,
    player2Set2,
    player2Set3,
    setPlayer1Set1, 
    setPlayer2Set1, 
    setPlayer1Set2, 
    setPlayer2Set2, 
    setPlayer1Set3, 
    setPlayer2Set3, 
    player1Match,
    player2Match,
    winner, 
    deuce, 
    setDeuce
  } = useContext(ScoreContext)

function saveScore(){
  if(player1Match + player2Match == 1){
    player1Game == 5 ? setPlayer1Set2(player1Set2 +1) : ""
    player2Game == 5 ? setPlayer2Set2(player2Set2 +1) : ""
  } else if(player1Match + player2Match == 2){
    player1Game == 5 ? setPlayer1Set3(player1Set3 +1) : ""
    player2Game == 5 ? setPlayer2Set3(player2Set3 +1) : ""
  } else {
    player1Game == 5 ? setPlayer1Set1(player1Set1 +1) : ""
    player2Game == 5 ? setPlayer2Set1(player2Set1 +1) : ""
  }

  //Nollar gamescore eftersom att ovan if-satser blir en oändlig loop om värden kvarstår.
  setPlayer1Game(0);
  setPlayer2Game(0);
}

//Avkommentera nedan 3 rader för att slippa klicka på "Nästa" för att spara Game till Set
// if(player1Game == 5 || player2Game == 5){
//   saveScore()
// }

//Regelverk för Deuce och direkt vinst vid score efter 40 och skillnad större än 2 poäng
if(player1Game && player2Game == 3){
  player1Game == player2Game ? setDeuce("Deuce") : setDeuce("")
} else if (player1Game != player2Game){
  setDeuce("")
}
if(player1Game == 4 && player2Game < 3){
  setPlayer1Game(player1Game +1)
}
if(player2Game == 4 && player1Game < 3){
  setPlayer2Game(player2Game +1)
}

  return (
    <div className="ScoreBoard">
    <h1>Scoreboard:</h1>
      <div className="scoresPlayer1">
        <p className="namePlayer1">{name1}</p>
        <p className="gamePlayer1">{scoreTranslate[player1Game]} {deuce} </p>
        <p className="set1Player1">{player1Set1} </p>
        <p className="set2Player1">{player1Set2} </p>
        <p className="set3Player1">{player1Set3} </p>
        <p className="matchPlayer1">{player1Match} </p>
      </div>
      
      <div className="scoresPlayer2">
        <p className="namePlayer2">{name2} </p>
        <p className="gamePlayer2">{scoreTranslate[player2Game]} </p>
        <p className="set1Player2">{player2Set1} </p>
        <p className="set2Player2">{player2Set2} </p>
        <p className="set3Player2">{player2Set3} </p>
        <p className="matchPlayer2">{player2Match} </p>

      </div>
      <button className="nextButton" onClick={saveScore}>Nästa</button>
      {winner ? <h1>Vinnaren är {winner}!</h1> : ""}
    </div>
  )
}

export default ScoreBoard