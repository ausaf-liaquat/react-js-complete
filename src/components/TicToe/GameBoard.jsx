import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({ onSelectBox, activePlayerSymbol }) {

  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectBox(rowIndex, colIndex) {
    setGameBoard((previousGameBoard) => {
      const updatedBoard = [
        ...previousGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard;
    });

    onSelectBox()
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, i) => (
        <li key={i}>
          <ol>
            {row.map((playerSym, j) => (
              <li key={j}>
                <button onClick={() => handleSelectBox(i, j)}>
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
