
import "./PlayerNameInput.css"
import { useRef, useContext } from 'react';
import { NameContext } from "../../../context/NameContext";


function PlayerNameInput() {
  const { setName1, setName2 } = useContext(NameContext);
  const inputName1 = useRef("null");
  const inputName2 = useRef("null");  
  
  const handleButtonClickPlayer1 = () => {
    const inputValue1 = inputName1.current.value;
    setName1(inputValue1)
  };

  const handleButtonClickPlayer2 = () => {
    const inputValue2 = inputName2.current.value;
    setName2(inputValue2)
  };

  return (
    <div>    
      <div className="playerInputs">
        <div className="inputPlayer1">
          <p>Name player1:</p> 
          <input placeholder="Name player 1" ref={inputName1} id="inputName1" />
          <button onClick={handleButtonClickPlayer1}>Spara</button>
        </div>

        <div className="inputPlayer2">
          <p>Name player2: </p> 
          <input placeholder="Namn spelare2" ref={inputName2} id="inputName2"></input>
          <button onClick={handleButtonClickPlayer2}>Spara</button>
        </div>
      </div>
    </div>
  );
}

export default PlayerNameInput;