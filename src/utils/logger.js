// client/src/utils/logger.js
const logger = {
  info: (message, details = {}) => {
    console.log(message, details);
    
    // Send to server
    fetch('/api/logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        level: 'info',
        message,
        details
      }),
    }).catch(err => console.error('Failed to send log to server:', err));
  },
  
  error: (message, details = {}) => {
    console.error(message, details);
    
    // Send to server
    fetch('/api/logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        level: 'error',
        message,
        details
      }),
    }).catch(err => console.error('Failed to send log to server:', err));
  }
};

export default logger;