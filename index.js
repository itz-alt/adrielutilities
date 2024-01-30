const { AoiClient } = require("aoi.js");
const mySecret = process.env['TOKEN']

const client = new AoiClient({

  token: process.env.TOKEN,
  prefix: "!",
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    securityKey: "a-32-characters-long-string-here",
  }
});
client.loadCommands("./commands/", true);


client.status({
  name: "Adriel's World™",
  type: "WATCHING",
  time: 12,
});

const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('Hello Express app!');
});