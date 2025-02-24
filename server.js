const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS with specific settings to demonstrate failure
const corsOptions = {
  origin: 'diceroller-excjgrefatdzduep.canadacentral-01.azurewebsites.net', // Change this to your hosted site to test failures
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
};

app.use(cors(corsOptions));

// Dice roller API
app.get('/roll', (req, res) => {
  const diceRoll = Math.floor(Math.random() * 6) + 1;
  res.json({ result: diceRoll });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});