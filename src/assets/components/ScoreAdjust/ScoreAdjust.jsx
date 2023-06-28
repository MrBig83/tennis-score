import "./ScoreAdjust.css";
import { useContext } from 'react';
import { NameContext } from "../../../context/NameContext";
import { ScoreContext } from "../../../context/ScoreContext";

function ScoreAdjust() {
  const { name1, name2 } = useContext(NameContext);
  const { 
    player1Set1, 
    setPlayer1Set1,
    player2Set1, 
    setPlayer2Set1, 
    player1Set2, 
    setPlayer1Set2, 
    player2Set2, 
    setPlayer2Set2, 
    player1Set3, 
    setPlayer1Set3, 
    player2Set3, 
    setPlayer2Set3, 
    // selectedSet,
    // setSelectedSet
  } = useContext(ScoreContext)

//   const setSet = (event) => {
//     setSelectedSet(event.target.value);
//   }
// //TA BORT DENNA LOGGEN
//   console.log(selectedSet);

  const addPointsPlayer1Set1 = () => {
    player1Set1 < 5 ? setPlayer1Set1(player1Set1 +1) : ""
  }
  const decPointsPlayer1Set1 = () => {
    player1Set1 > 0 ? setPlayer1Set1(player1Set1 -1) : ""
  }
  const addPointsPlayer1Set2 = () => {
    player1Set2 < 4 ? setPlayer1Set2(player1Set2 +1) : ""
  }
  const decPointsPlayer1Set2 = () => {
    player1Set2 > 0 ? setPlayer1Set2(player1Set2 -1) : ""
  }
  const addPointsPlayer1Set3 = () => {
    player1Set3 < 4 ? setPlayer1Set3(player1Set3 +1) : ""
  }
  const decPointsPlayer1Set3 = () => {
    player1Set3 > 0 ? setPlayer1Set3(player1Set3 -1) : ""
  }

  const addPointsPlayer2Set1 = () => {
    player2Set1 < 4 ? setPlayer2Set1(player2Set1 +1) : ""
  }
  const decPointsPlayer2Set1 = () => {
    player2Set1 > 0 ? setPlayer2Set1(player2Set1 -1) : ""
  }
  const addPointsPlayer2Set2 = () => {
    player2Set2 < 4 ? setPlayer2Set2(player2Set2 +1) : ""
  }
  const decPointsPlayer2Set2 = () => {
    player2Set2 > 0 ? setPlayer2Set2(player2Set2 -1) : ""
  }
  const addPointsPlayer2Set3 = () => {
    player2Set3 < 4 ? setPlayer2Set3(player2Set3 +1) : ""
  }
  const decPointsPlayer2Set3 = () => {
    player2Set3 > 0 ? setPlayer2Set3(player2Set3 -1) : ""
  }

  return (
    <div className="scoreAdjust">
    {/* <p>Välj set:</p>

    <div onChange={setSet}>
        <input type="radio" value="SET1" checked={selectedSet === 'SET1'} onChange={setSet} name="set"/> Set 1
        <input type="radio" value="SET2" checked={selectedSet === 'SET2'} onChange={setSet} name="set"/> Set 2
        <input type="radio" value="SET3" checked={selectedSet === 'SET3'} onChange={setSet} name="set"/> Set 3
      </div> */}

    <p>Justera poäng</p>
        <div className="scoreAdjustPlayer1">
            <p className="name1">{name1}</p>
            <>
                <button onClick={decPointsPlayer1Set1}>-</button>
                <p>{player1Set1}</p>
                <button onClick={addPointsPlayer1Set1}>+</button>
            </>
            <>
                <button onClick={decPointsPlayer1Set2}>-</button>
                <p>{player1Set2}</p>
                <button onClick={addPointsPlayer1Set2}>+</button>
            </>
            <>
                <button onClick={decPointsPlayer1Set3}>-</button>
                <p>{player1Set3}</p>
                <button onClick={addPointsPlayer1Set3}>+</button>
            </>
        </div>
        <div className="scoreAdjustPlayer2">
            <p className="name1">{name2}</p>
            <>
            <button onClick={decPointsPlayer2Set1}>-</button>
                <p>{player2Set1}</p>
                <button onClick={addPointsPlayer2Set1}>+</button>
            </>
            <>
            <button onClick={decPointsPlayer2Set2}>-</button>
                <p>{player2Set2}</p>
                <button onClick={addPointsPlayer2Set2}>+</button>
            </>
            <>
            <button onClick={decPointsPlayer2Set3}>-</button>
                <p>{player2Set3}</p>
                <button onClick={addPointsPlayer2Set3}>+</button>
            </>
        </div>

    
    </div>
  )
}

export default ScoreAdjust