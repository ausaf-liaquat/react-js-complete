import { useState } from "react";
import GameBoard from "./GameBoard";
import Player from "./Player";

export default function TicToe(params) {
  const [activePlayer, setactivePlayer] = useState("O");
  function handleSelectBox() {
    setactivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer==="X"} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer==="O"} />
        </ol>
        <GameBoard onSelectBox={handleSelectBox} activePlayerSymbol={activePlayer}/>
      </div>
      Log
    </main>
  );
}
