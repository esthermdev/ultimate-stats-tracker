import React, { useState } from 'react';

function AddPlayerForm({ onAddPlayer }) {
  const [name, setName] = useState('');
  const [team, setTeam] = useState('O');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onAddPlayer(name, team);
      setName('');
    }
  };
  
  return (
    <form className="add-player-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter player name"
        required
      />
      <select 
        className='team-dropdown'
        value={team} 
        onChange={(e) => setTeam(e.target.value)}
      >
        <option value='O'>Offence</option>
        <option value='D'>Defence</option>
      </select>
      <button type="submit">Add Player</button>
    </form>
  );
}

export default AddPlayerForm;