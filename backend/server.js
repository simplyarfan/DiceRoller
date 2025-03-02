const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Allowed Origins (Frontend URL)
const allowedOrigins = ["https://salmon-dune-097b16e10.6.azurestaticapps.net"];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS not allowed"));
    }
  },
};

app.use(cors(corsOptions));

app.get("/roll", (req, res) => {
  const diceRoll = Math.floor(Math.random() * 6) + 1;
  res.json({ roll: diceRoll });
});

// CORS Failure Example
app.get("/cors-fail", (req, res) => {
  res.set("Access-Control-Allow-Origin", "https://unauthorized-site.com");
  res.status(403).json({ error: "CORS Policy Violation" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
