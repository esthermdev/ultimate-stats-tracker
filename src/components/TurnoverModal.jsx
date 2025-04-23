import React, { useState } from 'react';

function TurnoverModal({ turnoverData, onConfirm, onCancel }) {
  const [timestamp, setTimestamp] = useState('');
  
  // Validate timestamp format
  const validateTimestamp = (value) => {
    if (!value.trim()) return true;
    const timePattern = /^\d{1,2}:\d{2}$/;
    return timePattern.test(value.trim());
  };
  
  const handleTimestampChange = (e) => {
    setTimestamp(e.target.value);
  };
  
  // Handle direct turnover type selection
  const handleTypeSelection = (type) => {
    const trimmedTimestamp = timestamp.trim();
    
    // Only validate timestamp if one was entered
    let formattedTimestamp = null;
    
    if (trimmedTimestamp) {
      // If it doesn't match the format, try to fix it
      if (!validateTimestamp(trimmedTimestamp)) {
        // Try to extract numbers only and format correctly
        const numbers = trimmedTimestamp.replace(/[^0-9]/g, '');
        
        if (numbers.length >= 2) {
          // Try to format as mm:ss
          const minutes = numbers.slice(0, numbers.length - 2);
          const seconds = numbers.slice(numbers.length - 2);
          formattedTimestamp = `${minutes}:${seconds}`;
        }
      } else {
        formattedTimestamp = trimmedTimestamp;
      }
    }
      
    onConfirm(type, formattedTimestamp);
  };
  
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Add Turnover</h3>
        <p>
          Add a turnover for player: <strong>{turnoverData.playerName}</strong>
        </p>
        
        <div className="turnover-form">
          <div className="form-group">
            <label htmlFor="timestamp">Timestamp (optional):</label>
            <input
              type="text"
              id="timestamp"
              value={timestamp}
              onChange={handleTimestampChange}
              placeholder="e.g. 14:30"
              className="timestamp-input"
              pattern="[0-9]{1,2}:[0-9]{2}"
            />
            <small className="input-help">Enter the video timestamp when this turnover occurred (format: mm:ss)</small>
          </div>
          
          <div className="form-group">
            <label>Select Turnover Type:</label>
            <div className="turnover-buttons">
              <button 
                className="turnover-type-button rzto"
                onClick={() => handleTypeSelection('RZTO')}
              >
                RZTO
              </button>
              <button 
                className="turnover-type-button hto"
                onClick={() => handleTypeSelection('HTO')}
              >
                HTO
              </button>
              <button 
                className="turnover-type-button reset"
                onClick={() => handleTypeSelection('Reset TO')}
              >
                Reset TO
              </button>
              <button 
                className="turnover-type-button receiver"
                onClick={() => handleTypeSelection('Receiver Err')}
              >
                Receiver Err
              </button>
              <button 
                className="turnover-type-button thrower"
                onClick={() => handleTypeSelection('Thrower Err')}
              >
                Thrower Err
              </button>
              <button 
                className="turnover-type-button general"
                onClick={() => handleTypeSelection('Turnover')}
              >
                Turnover
              </button>
            </div>
          </div>
        </div>
        
        <div className="modal-actions">
          <button onClick={onCancel} className="cancel-button">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default TurnoverModal;