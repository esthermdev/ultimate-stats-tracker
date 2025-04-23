import React from 'react';

function PlayerTable({ players, onUpdateStat, onDeletePlayer }) {
  // If there are no players, display a message
  if (players.length === 0) {
    return <div className="no-players">No players added yet. Add a player to get started.</div>;
  }
  
  return (
    <div className="table-container">
      <table className="stats-table">
        <thead>
          <tr>
            <th>Player</th>
            <th>OPP</th>
            <th>DPP</th>
            <th>Tot PP</th>
            <th>T</th>
            <th>G</th>
            <th>A</th>
            <th>D</th>
            <th>H</th>
            <th>TO</th>
            <th>RZTO</th>
            <th>HTO</th>
            <th>Reset TO</th>
            <th>Rec Err</th>
            <th>Throw Err</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {players.map(player => (
            <tr key={player.id}>
              <td className="player-name">{player.name}</td>
              
              {/* Regular stats - clickable cells */}
              <td 
                className="stat-cell clickable" 
                onClick={() => onUpdateStat(player.id, player.name, 'opp')}
              >
                {player.opp}
              </td>
              
              <td 
                className="stat-cell clickable" 
                onClick={() => onUpdateStat(player.id, player.name, 'dpp')}
              >
                {player.dpp}
              </td>
              
              {/* Total points is calculated, not clickable */}
              <td className="stat-cell calculated">
                {player.opp + player.dpp}
              </td>
              
              <td 
                className="stat-cell clickable" 
                onClick={() => onUpdateStat(player.id, player.name, 'touches')}
              >
                {player.touches}
              </td>
              
              <td 
                className="stat-cell clickable" 
                onClick={() => onUpdateStat(player.id, player.name, 'goals')}
              >
                {player.goals}
              </td>
              
              <td 
                className="stat-cell clickable" 
                onClick={() => onUpdateStat(player.id, player.name, 'assists')}
              >
                {player.assists}
              </td>
              
              <td 
                className="stat-cell clickable" 
                onClick={() => onUpdateStat(player.id, player.name, 'defense')}
              >
                {player.defense}
              </td>
              
              <td 
                className="stat-cell clickable" 
                onClick={() => onUpdateStat(player.id, player.name, 'hucks')}
              >
                {player.hucks}
              </td>
              
              {/* Turnovers column - opens modal */}
              <td 
                className="stat-cell clickable" 
                onClick={() => onUpdateStat(player.id, player.name, 'turnovers')}
              >
                {player.turnoverDetails ? player.turnoverDetails.length : 0}
              </td>
              
              {/* Turnover type cells - not clickable, just display counts */}
              <td className="stat-cell-to">
                {player.rzto || 0}
              </td>
              
              <td className="stat-cell-to">
                {player.hto || 0}
              </td>
              
              <td className="stat-cell-to">
                {player.resetTo || 0}
              </td>
              
              <td className="stat-cell-to">
                {player.receiverErr || 0}
              </td>
              
              <td className="stat-cell-to">
                {player.throwerErr || 0}
              </td>
              
              {/* Actions column */}
              <td className="actions-cell">
                <button 
                  onClick={() => onDeletePlayer(player.id)} 
                  className="delete-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlayerTable;