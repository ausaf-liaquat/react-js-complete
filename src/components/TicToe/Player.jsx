import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setplayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick(params) {
    setIsEditing((editing) => !editing);
  }

  function handlePlayerName(event) {
    setplayerName(event.target.value);
  }

  let editableInput = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";
  if (isEditing) {
    editableInput = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handlePlayerName}
      />
    );
    btnCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editableInput}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}
