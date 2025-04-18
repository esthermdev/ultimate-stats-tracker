const express = require('express');
const { PrismaClient } = require('./generated/prisma');
const cors = require('cors');

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

// Get all players with stats
app.get('/api/players', async (req, res) => {
  try {
    const players = await prisma.player.findMany({
      include: {
        turnovers: true // Include related turnovers
      }
    });
    
    // Format the response for the client
    const formattedPlayers = players.map(player => {
      // Extract the player turnovers for processing
      const { turnovers: playerTurnovers, ...playerStats } = player;
      
      // Ensure all counters are actual numbers, not null or undefined
      const safePlayerStats = {
        ...playerStats,
        turnovers: playerTurnovers?.length || 0,
        rzto: playerStats.rzto || 0,
        hto: playerStats.hto || 0,
        resetTo: playerStats.resetTo || 0,
        receiverErr: playerStats.receiverErr || 0,
        throwerErr: playerStats.throwerErr || 0
      };
      
      // Process turnover timestamps if needed
      const turnoverDetails = playerTurnovers?.map(to => ({
        id: to.id,
        type: to.type,
        timestamp: to.timestamp || ''
      })) || [];
      
      return {
        ...safePlayerStats,
        turnoverDetails
      };
    });
    
    res.json(formattedPlayers);
  } catch (error) {
    console.error('Error fetching players:', error);
    res.status(500).json({ error: 'Failed to fetch players' });
  }
});

// Create new player
app.post('/api/players', async (req, res) => {
  const { name, team } = req.body;
  try {
    const player = await prisma.player.create({
      data: { name, team }
    });
    res.json(player);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create player' });
  }
});

// Update a specific stat for a player
app.patch('/api/players/:id/stat/:stat', async (req, res) => {
  const { id, stat } = req.params;
  const { value = 1 } = req.body; // Default increment by 1

  const validStats = ['opp', 'dpp', 'touches', 'goals', 'assists', 'defense', 'hucks', 'turnovers', 'rzto', 'hto', 'resetTo', 'receiverErr', 'throwerErr'];
  if (!validStats.includes(stat)) {
    return res.status(400).json({ error: 'Invalid stat name' });
  }

  try {
    const player = await prisma.player.update({
      where: { id: parseInt(id) },
      data: { [stat]: { increment: value } }
    });
    res.json(player);
  } catch (error) {
    console.error('Error updating stat:', error);
    res.status(400).json({ error: 'Failed to update stat'});
  }
});

// Add a turnover with type and timestamp
app.post('/api/players/:id/turnover', async (req, res) => {
  const { id } = req.params;
  const { type, timestamp } = req.body;

  // Define property mapping for turnover types
  const typeMap = {
    'RZTO': 'rzto',
    'HTO': 'hto',
    'Reset TO': 'resetTo',
    'Receiver Err': 'receiverErr',
    'Thrower Err': 'throwerErr',
    'Turnover': 'regular'
  };

  if (!typeMap[type]) {
    console.error('Invalid turnover type:', type);
    return res.status(400).json({ error: 'Invalid turnover type' });
  }

  const fieldToUpdate = typeMap[type];

  try {
    // For regular turnovers, we don't increment a specific counter
    if (fieldToUpdate === 'regular') {
      const player = await prisma.player.update({
        where: { id: parseInt(id) },
        data: {
          turnovers: {
            create: {
              timestamp: timestamp || null,
              type: 'regular'
            }
          }
        },
        include: {
          turnovers: true
        }
      });
      res.json(player);
    } else {
      // Increment the specific type counter and add a turnover record
      const player = await prisma.player.update({
        where: { id: parseInt(id) },
        data: {
          [fieldToUpdate]: { increment: 1 },
          turnovers: {
            create: {
              timestamp: timestamp || null,
              type: fieldToUpdate
            }
          }
        },
        include: {
          turnovers: true
        }
      });
      res.json(player);
    }
  } catch (error) {
    console.error('Error adding specific turnover:', error, 'Field to update:', fieldToUpdate);
    res.status(400).json({ error: 'Failed to add turnover' });
  }
});

// Delete a player
app.delete('/api/players/:id', async (req, res) => {
  const { id } = req.params;
  
  try {
    await prisma.player.delete({
      where: { id: parseInt(id) }
    });
    res.json({ success: true });
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete player' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});