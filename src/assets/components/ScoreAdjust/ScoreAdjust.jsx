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
    player1Set1, 
    setPlayer1Set1,
    player2Set1, 
    setPlayer2Set1, 
    // player1Set2, 
    // setPlayer1Set2, 
    // player2Set2, 
    // setPlayer2Set2, 
    // player1Set3, 
    // setPlayer1Set3, 
    // player2Set3, 
    // setPlayer2Set3, 
    // selectedSet,
    // setSelectedSet
  } = useContext(ScoreContext)

//   const setSet = (event) => {
//     setSelectedSet(event.target.value);
//   }
// //TA BORT DENNA LOGGEN
//   console.log(selectedSet);

  const addPointsPlayer1Game = () => {
    player1Game < 5 ? setPlayer1Game(player1Game +1) : ""
  }
  const decPointsPlayer1Game = () => {
    player1Game > 0 ? setPlayer1Game(player1Game -1) : ""
  }
  // const addPointsPlayer1Set2 = () => {
  //   player1Set2 < 4 ? setPlayer1Set2(player1Set2 +1) : ""
  // }
  // const decPointsPlayer1Set2 = () => {
  //   player1Set2 > 0 ? setPlayer1Set2(player1Set2 -1) : ""
  // }
  // const addPointsPlayer1Set3 = () => {
  //   player1Set3 < 4 ? setPlayer1Set3(player1Set3 +1) : ""
  // }
  // const decPointsPlayer1Set3 = () => {
  //   player1Set3 > 0 ? setPlayer1Set3(player1Set3 -1) : ""
  // }

  const addPointsPlayer2Game = () => {
    player2Game < 5 ? setPlayer2Game(player2Game +1) : ""
  }
  const decPointsPlayer2Game = () => {
    player2Game > 0 ? setPlayer2Game(player2Game -1) : ""
  }
  // const addPointsPlayer2Set2 = () => {
  //   player2Set2 < 4 ? setPlayer2Set2(player2Set2 +1) : ""
  // }
  // const decPointsPlayer2Set2 = () => {
  //   player2Set2 > 0 ? setPlayer2Set2(player2Set2 -1) : ""
  // }
  // const addPointsPlayer2Set3 = () => {
  //   player2Set3 < 4 ? setPlayer2Set3(player2Set3 +1) : ""
  // }
  // const decPointsPlayer2Set3 = () => {
  //   player2Set3 > 0 ? setPlayer2Set3(player2Set3 -1) : ""
  // }

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