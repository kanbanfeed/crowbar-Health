const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// API endpoint for health stats
app.get('/api/health-stats', (req, res) => {
  const stats = {
    activeDoctors: 120,
    patientsHelped: 5000,
    appointmentsToday: 45,
    satisfactionRate: 98,
    telemedSessions: 320,
    prescriptionsFilled: 890
  };
  
  res.json(stats);
});

// Serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Crowbar Health server running on http://localhost:${PORT}`);
});

