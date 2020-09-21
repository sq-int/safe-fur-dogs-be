// express
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");

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

// connection options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// connect to mongo DB atlas
mongoose
  .connect(`${process.env.DB_CONNECT}`, options)
  .then(() => console.log("Successfully connected to database."))
  .catch((err) => console.error(err));

// export server
module.exports = server;
