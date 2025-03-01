const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

// Dice rolling API endpoint
app.get("/roll", (req, res) => {
    const diceFaces = [1, 2, 3, 4, 5, 6];
    const rollResult = diceFaces[Math.floor(Math.random() * diceFaces.length)];
    res.json({ roll: rollResult });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
