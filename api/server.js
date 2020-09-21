// express
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { Router } = require("express");

// init server
const server = express();

// middleware
server.use(express.json());
server.use(cors());
server.use(helmet());

// test GET
server.get("/", (req, res) => {
  res.json({ hey: "there" });
});

// export server
module.exports = server;
