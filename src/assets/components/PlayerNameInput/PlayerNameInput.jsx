import "./PlayerNameInput.css"
import { useRef, useContext } from 'react';
import { NameContext } from "../../../context/NameContext";

function PlayerNameInput() {
  const { setName1, setName2 } = useContext(NameContext);
  const inputName1 = useRef("null");
  const inputName2 = useRef("null");  
  
  const saveNamePlayer1 = () => {
    const inputValue1 = inputName1.current.value;
    setName1(inputValue1)
  };

  const saveNamePlayer2 = () => {
    const inputValue2 = inputName2.current.value;
    setName2(inputValue2)
  };

  return (
    <div>    
      <div className="playerInputs">
        <div className="inputPlayer1">
          <p>Namn spelare 1:</p> 
          <input placeholder="Ex. Knatte" ref={inputName1} id="inputName1" />
          <button onClick={saveNamePlayer1}>Spara</button>
        </div>

        <div className="inputPlayer2">
          <p>Namn spelare 2: </p> 
          <input placeholder="Ex. Fnatte" ref={inputName2} id="inputName2"></input>
          <button onClick={saveNamePlayer2}>Spara</button>
        </div>
      </div>
    </div>
  );
}

export default PlayerNameInput;