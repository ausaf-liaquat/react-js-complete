import { useState } from "react";
import ExpenseItem from "./components/ExpenseItem";
import TicToe from "./components/TicToe/TicToe";
import "./index.css";

function App() {
  const [enteredPlayerName, setEnteredPlayerName]=useState("")
const [submitted, setSubmitted] = useState(false)
  function handleChange(event) {
    setEnteredPlayerName(event.target.value)
  }

  function handleClick(params) {
    setSubmitted(true)
  }
  
  return (
    <div>
      <h2>Welcome {submitted?enteredPlayerName:'unknown entity'}</h2>
      
      <p>
        <input type="text" name="" onChange={handleChange} value={enteredPlayerName} />
        <button onClick={handleClick}>Set name</button>
      </p>

      {/* <TicToe />
      <ExpenseItem /> */}
    </div>
  );
}

export default App;
