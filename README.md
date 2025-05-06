# Ultimate Stats Tracker

A web application for tracking statistics in ultimate frisbee games.

## Project Structure

```
ultimate-stats-tracker/
├── client/                  # React frontend
│   ├── public/              # Static assets
│   └── src/                 # Source code
│       ├── components/      # React components
│       │   ├── AddPlayerForm.jsx
│       │   ├── Header.jsx
│       │   ├── PlayerTable.jsx
│       │   └── TurnoverModal.jsx
│       ├── App.js           # Main application component
│       └── index.js         # Entry point
├── prisma/                  # Database schema and migrations
│   ├── migrations/          # Database migration files
│   └── schema.prisma        # Prisma schema
├── generated/               # Generated Prisma client
├── server/                  # Server side folder
│   ├── server.js            # Express backend server
└── package.json             # Project dependencies and scripts
```