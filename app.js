const express = require('express');
const cors = require ("cors");
const app = express();
const port = 1234;

const MusicController = require("./controllers/musicController");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("BABY WELCOME TO THE PARTY");
  });

  app.get("*", (req, res) => {
    res.status(404).json({ success: false, data: { error: "Nobodies Home..." } });
  });
  module.exports = app;