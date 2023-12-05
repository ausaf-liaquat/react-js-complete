import { useState } from "react";
import GameBoard from "./GameBoard";
import Player from "./Player";
import Log from "./Log";
import { WINNING_COMBINATIONS } from "../../winning-combinations";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

export default function TicToe(params) {
  // const [activePlayer, setactivePlayer] = useState("X");
  const [gameTurns, setgameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = initialGameBoard;

  for (const turn of gameTurns) {
    const { box, player } = turn;
    const { row, col } = box;

    gameBoard[row][col] = player;
  }
  let winner;

  for (const comnination of WINNING_COMBINATIONS) {
    const firstSymb = gameBoard[comnination[0].row][comnination[0].column];
    const secondSymb = gameBoard[comnination[1].row][comnination[1].column];
    const thirdSymb = gameBoard[comnination[2].row][comnination[2].column];
// console.log(gameBoard,comnination);
    if (firstSymb && firstSymb === secondSymb && firstSymb === thirdSymb) {

      winner = firstSymb;

    }
  }

  function handleSelectBox(rowIndex, colIndex) {
    // setactivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setgameTurns((prevTurns) => {
      // check which player select what
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { box: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }
  console.log(gameTurns);
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        {winner && <p>Hurrah! {winner}, You Won.</p>}
        <GameBoard
          onSelectBox={handleSelectBox}
          // activePlayerSymbol={activePlayer}
          board={gameBoard}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}
