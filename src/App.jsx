import { useState } from "react";
import ExpenseItem from "./components/ExpenseItem";
import TicToe from "./components/TicToe/TicToe";
import "./index.css";
import Player from "./components/Countdown/Player";

function App() {
  const [enteredPlayerName, setEnteredPlayerName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  function handleChange(event) {
    setEnteredPlayerName(event.target.value);
  }

  function handleClick(params) {
    setSubmitted(true);
  }

  return (
    <div>
      <Player />
      {/* <TicToe />
      <ExpenseItem /> */}
    </div>
  );
}

export default App;
