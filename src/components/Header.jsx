import React from 'react';

function Header({ onExport }) {
  return (
    <header className="app-header">
      <h1>Ultimate Frisbee Stats</h1>
      <div className="header-actions">
        <button onClick={onExport} className="export-button">
          Export to Excel
        </button>
      </div>
    </header>
  );
}

export default Header;