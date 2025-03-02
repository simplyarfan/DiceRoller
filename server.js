const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for testing CORS failures
const corsOptions = {
    origin: "https://salmon-dune-097b16e10.6.azurestaticapps.net", // Allow only your static site
    methods: "GET",
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

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
