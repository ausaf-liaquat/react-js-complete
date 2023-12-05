import { useState } from "react";


export default function GameBoard({ onSelectBox, board }) {

  
  return (
    <ol id="game-board">
      {board.map((row, i) => (
        <li key={i}>
          <ol>
            {row.map((playerSym, j) => (
              <li key={j}>
                <button onClick={()=>onSelectBox(i,j)}
                disabled={playerSym!== null}
                >
                  {playerSym}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
