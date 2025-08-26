import { useState } from "react"
import Dice from "./Dice"
import {nanoid} from "nanoid"
function App() {
  const [dice,setDice] = useState(generateAllNewDice())
  const gameWon = (dice.every(die=> die.isHeld) && dice.every(die=> die.value===dice[0].value));
  function generateAllNewDice(){
      return new Array(10)
      .fill(0)
      .map(()=> ({
        value: Math.ceil(Math.random()*6), 
        isHeld:false,
        id:nanoid()
      }))
   }

   function reset()
   {
    setDice(generateAllNewDice)
    
   }
   function hold(id)
   {
     setDice(oldDice => oldDice.map(die => (die.id===id?{...die, isHeld:!die.isHeld}:die)))
   }
   function rollDice()
   {
      setDice(oldDice => oldDice.map(die=>(
        die.isHeld? die : {...die,value:Math.ceil(Math.random()*6)}
      )))
   }
   const diceElements = dice.map(dieObj => <Dice id={dieObj.id} value={dieObj.value} isHeld={dieObj.isHeld} hold={hold}/>)
  return (
    <main>
      <h1>T E N Z I E S</h1>
      <div className="dice-container">
        {diceElements}
      </div>
      <button className="roll-dice" onClick={gameWon ? reset : rollDice}> {gameWon ? "New Game" : "Roll"}</button>
    </main>
  )
}

export default App
