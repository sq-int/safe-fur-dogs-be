// express
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");
const rateLimit = require("express-rate-limit");

// init server
const server = express();

// routers
const foodRouter = require("./food/routers/router.js");

// middleware
server.use(express.json());
server.use(cors());
server.use(helmet());

// rate limit configuration
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 20,
  message: "You have submitted too many requests. Please try again later.",
});

// routes
server.use("/api/food", limiter, foodRouter);

// connection options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

// connect to mongo DB atlas
mongoose
  .connect(`${process.env.DB_CONNECT}`, options)
  .then(() => console.log("Successfully connected to database."))
  .catch((err) => console.error(err));

// export server
module.exports = server;
