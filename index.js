const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const WEBHOOK_URL = process.env.WEBHOOK_URL;

app.post("/order", async (req, res) => {
  const { username, rank, screenshot } = req.body;

  await axios.post(WEBHOOK_URL, {
    content: `🛒 New Store Order

Player: ${username}
Rank: ${rank}
Screenshot: ${screenshot}`
  });

  res.send("Order Sent");
});

app.get("/", (req, res) => {
  res.send("WarMC Store Backend Online");
});

app.listen(process.env.PORT || 3000);
