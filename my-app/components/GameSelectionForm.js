import React, { useState } from 'react';

const GameSelectionForm = () => {
  const [selectedGame, setSelectedGame] = useState('');

  const handleGameChange = (event) => {
    setSelectedGame(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle the selected game, for example, redirect the user to the game page
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select a game:
        <select value={selectedGame} onChange={handleGameChange}>
          <option value="">--Please choose a game--</option>
          <option value="game1">Game 1</option>
          <option value="game2">Game 2</option>
          <option value="game3">Game 3</option>
          // Add more games as needed
        </select>
      </label>
      <input type="submit" value="Go to game" />
    </form>
  );
};

export default GameSelectionForm;