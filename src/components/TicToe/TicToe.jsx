import Player from "./Player";

export default function TicToe(params) {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
            
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />

        </ol>
        Game Board
      </div>
      Log
    </main>
  );
}
