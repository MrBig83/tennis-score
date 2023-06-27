
import "./PlayerNameInput.css"
function PlayerNameInput() {
  



    //Gör namn-states här för att spara till efterliggande konponenter

  return (
    <div className="playerInputs">

      <div className="inputPlayer1">
        <p>Name player1:</p> 
        <input placeholder="Namn spelare1" id="inputName1"></input>
        <button>Spara</button>
      </div>

      <div className="inputPlayer2">
        <p>Name player2: </p> 
        <input placeholder="Namn spelare2" id="inputName2"></input>
        <button>Spara</button>
      </div>
    </div>
  )
}

export default PlayerNameInput