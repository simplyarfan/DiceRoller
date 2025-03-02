const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Allow requests from your static web app
const allowedOrigins = [
  "https://salmon-dune-097b16e10.6.azurestaticapps.net", // Your frontend URL
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET"],
    allowedHeaders: ["Content-Type"],
  })
);

// Dice Roller API
app.get("/roll", (req, res) => {
  const diceRoll = Math.floor(Math.random() * 6) + 1; // Simulate rolling a dice (1-6)
  res.json({ result: diceRoll });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
