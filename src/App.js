// src/App.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import './App.css';
import PlayerTable from './components/PlayerTable';
import AddPlayerForm from './components/AddPlayerForm';
import TurnoverModal from './components/TurnoverModal';
import Header from './components/Header';

function App() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [turnoverData, setTurnoverData] = useState({
    playerId: null, 
    playerName: '',
    type: 'Turnover'  // Default to 'Turnover'
  });
  const [showTurnoverModal, setShowTurnoverModal] = useState(false);
  
  useEffect(() => {
    fetchPlayers();
  }, []);

  const oPlayers = []
  const dPlayers = []

  players.forEach(player => {
    if (player.team === 'O') {
      oPlayers.push(player);
      oPlayers.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      dPlayers.push(player);
      dPlayers.sort((a, b) => a.name.localeCompare(b.name));
    }
  });
  
  const fetchPlayers = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/players');
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Ensure all player stats are numbers, not null/undefined
      const processedData = data.map(player => ({
        ...player,
        // Ensure all these values are numbers
        rzto: player.rzto || 0,
        hto: player.hto || 0,
        resetTo: player.resetTo || 0,
        receiverErr: player.receiverErr || 0,
        throwerErr: player.throwerErr || 0,
        // And ensure other key stats are numbers
        opp: player.opp || 0,
        dpp: player.dpp || 0,
        touches: player.touches || 0,
        goals: player.goals || 0,
        assists: player.assists || 0,
        defense: player.defense || 0,
        hucks: player.hucks || 0
      }));
      
      setPlayers(processedData);
      setError(null);
    } catch (err) {
      setError('Failed to fetch players. Please try again later.');
      console.error('Error fetching players:', err);
    } finally {
      setLoading(false);
    }
  };
  
  const addPlayer = async (name, team) => {
    try {
      const response = await fetch('/api/players', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, team })
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const newPlayer = await response.json();
      
      // Optimistically update the UI with the new player
      setPlayers(prevPlayers => [...prevPlayers, newPlayer]);
    } catch (err) {
      setError('Failed to add player. Please try again.');
      console.error('Error adding player:', err);
    }
  };
  
  const updateStat = useCallback(async (playerId, playerName, stat) => {
    // Special handling for turnovers - only open modal for general turnover column
    if (stat === 'turnovers') {
      setTurnoverData({ playerId, playerName });
      setShowTurnoverModal(true);
      return;
    }
    
    try {
      // Optimistically update the UI
      setPlayers(prevPlayers => 
        prevPlayers.map(player => 
          player.id === playerId 
            ? { ...player, [stat]: player[stat] + 1 }
            : player
        )
      );
      
      const response = await fetch(`/api/players/${playerId}/stat/${stat}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value: 1 })
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      // No need to fetch players again since we updated optimistically
    } catch (err) {
      // Revert the optimistic update on error
      setPlayers(prevPlayers => 
        prevPlayers.map(player => 
          player.id === playerId 
            ? { ...player, [stat]: player[stat] - 1 }
            : player
        )
      );
      setError(`Failed to update ${stat}. Please try again.`);
      console.error(`Error updating ${stat}:`, err);
    }
  }, []);
  
  // We no longer need this function as we'll only open the modal from the general turnovers column
  
  const addTurnover = async (turnoverType, timestamp) => {
    // Helper function to properly map turnover type to property name
    const getTurnoverPropertyKey = (type) => {
      const typeMap = {
        'RZTO': 'rzto',
        'HTO': 'hto',
        'Reset TO': 'resetTo',
        'Receiver Err': 'receiverErr',
        'Thrower Err': 'throwerErr',
        'Turnover': 'regular'
      };
      return typeMap[type] || null;
    };
    
    const propertyKey = getTurnoverPropertyKey(turnoverType);
    
    try {
      // Optimistically update the UI
      setPlayers(prevPlayers => 
        prevPlayers.map(player => {
          if (player.id === turnoverData.playerId) {
            // Create a new turnover detail entry
            const newTurnoverDetail = {
              id: Date.now(), // Temporary ID until server responds
              type: propertyKey || 'regular',
              timestamp: timestamp || null
            };
            
            // Start with a copy of the player
            const updatedPlayer = { ...player };
            
            // Update turnover details
            updatedPlayer.turnoverDetails = [
              ...(player.turnoverDetails || []),
              newTurnoverDetail
            ];
            
            // Only increment specific turnover type if not 'Turnover'
            if (propertyKey !== 'regular') {
              updatedPlayer[propertyKey] = (player[propertyKey] || 0) + 1;
            }
            
            return updatedPlayer;
          }
          return player;
        })
      );
      
      const response = await fetch(`/api/players/${turnoverData.playerId}/turnover`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          type: turnoverType,
          timestamp: timestamp || null
        })
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      setShowTurnoverModal(false);
      // Fetch players after adding the turnover to ensure we have the correct data
      fetchPlayers();
    } catch (err) {
      // On error, revert the optimistic update and fetch players again
      fetchPlayers();
      setError('Failed to add turnover. Please try again.');
      console.error('Error adding turnover:', err);
    }
  };
  
  const deletePlayer = async (playerId) => {
    if (!window.confirm('Are you sure you want to delete this player?')) return;
    
    try {
      // Optimistically update the UI
      setPlayers(prevPlayers => prevPlayers.filter(player => player.id !== playerId));
      
      const response = await fetch(`/api/players/${playerId}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      // No need to fetch players again since we updated optimistically
    } catch (err) {
      // Revert the optimistic update on error
      fetchPlayers();
      setError('Failed to delete player. Please try again.');
      console.error('Error deleting player:', err);
    }
  };
  
  const exportToExcel = () => {
    // First create the main stats worksheet
    const statsWorksheet = XLSX.utils.json_to_sheet(
      players.map(player => ({
        'Name': player.name,
        'O Points Played': player.opp,
        'D Points Played': player.dpp,
        'Total Points Played': player.opp + player.dpp,
        'Touches': player.touches,
        'Goals': player.goals,
        'Assists': player.assists,
        'Defense': player.defense,
        'Hucks': player.hucks,
        'Turnovers': player.turnoverDetails?.length || 0,
        'RZTO': player.rzto,
        'HTO': player.hto,
        'Reset TO': player.resetTo,
        'Receiver Err': player.receiverErr,
        'Thrower Err': player.throwerErr
      }))
    );
    
    // Format column widths for better readability
    const columnWidths = [
      { wch: 20 }, // Name
      { wch: 15 }, // OPP
      { wch: 15 }, // DPP
      { wch: 15 }, // Tot PP
      { wch: 15 }, // Touches
      { wch: 15 }, // Goals
      { wch: 15 }, // Assists
      { wch: 15 }, // Defense
      { wch: 15 }, // Hucks
      { wch: 15 }, // Turnovers
      { wch: 15 }, // RZTO
      { wch: 15 }, // HTO
      { wch: 15 }, // Reset TO
      { wch: 15 }, // Receiver Err
      { wch: 15 }, // Thrower Err
    ];
    statsWorksheet['!cols'] = columnWidths;
    
    // Now create a detailed turnovers worksheet
    const turnoversData = [];
    
    players.forEach(player => {
      if (player.turnoverDetails && player.turnoverDetails.length > 0) {
        player.turnoverDetails.forEach(to => {
          let typeLabel = to.type;
          
          // Map type back to display label
          switch(to.type) {
            case 'rzto': typeLabel = 'RZTO'; break;
            case 'hto': typeLabel = 'HTO'; break;
            case 'resetTo': typeLabel = 'Reset TO'; break;
            case 'receiverErr': typeLabel = 'Receiver Err'; break;
            case 'throwerErr': typeLabel = 'Thrower Err'; break;
            case 'regular': typeLabel = 'Turnover'; break;
            default: typeLabel = to.type;
          }
          
          turnoversData.push({
            'Player': player.name,
            'Turnover Type': typeLabel,
            'Timestamp': to.timestamp || 'N/A',
            'Date': new Date(to.createdAt || Date.now()).toLocaleDateString()
          });
        });
      }
    });
    
    // Create the turnover details worksheet if we have data
    let turnoverWorksheet = null;
    if (turnoversData.length > 0) {
      turnoverWorksheet = XLSX.utils.json_to_sheet(turnoversData);
      // Set column widths for turnover sheet
      turnoverWorksheet['!cols'] = [
        { wch: 20 }, // Player name
        { wch: 15 }, // Turnover type
        { wch: 15 }, // Timestamp
        { wch: 15 }, // Date
      ];
    }
    
    // Create a workbook and add the worksheets
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, statsWorksheet, 'Player Stats');
    
    // Add turnover details worksheet if it exists
    if (turnoverWorksheet) {
      XLSX.utils.book_append_sheet(workbook, turnoverWorksheet, 'Turnover Details');
    }
    
    // Generate Excel file and trigger download
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(blob, `ultimate_stats_${new Date().toISOString().split('T')[0]}.xlsx`);
  };
  
  return (
    <div className="App">
      <Header onExport={exportToExcel} />
      
      {error && <div className="error-message">{error}</div>}
      
      <AddPlayerForm onAddPlayer={addPlayer} />
      
      {loading ? (
        <div className="loading-message">Loading players...</div>
      ) : (
        <div>
          <h2>Offence</h2>
          <PlayerTable 
            players={oPlayers} 
            onUpdateStat={updateStat}
            onDeletePlayer={deletePlayer}
          />    
          <h2>Defence</h2>
          <PlayerTable 
            players={dPlayers} 
            onUpdateStat={updateStat}
            onDeletePlayer={deletePlayer}
          />
        </div>
      )}
      
      {showTurnoverModal && (
        <TurnoverModal 
          turnoverData={turnoverData}
          onConfirm={addTurnover}
          onCancel={() => setShowTurnoverModal(false)}
        />
      )}
    </div>
  );
}

export default App;