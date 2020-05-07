require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const server = express();

/* bring in routers */
const foodRouter = require('./food/router');
const aRouter = require('./acp/router');

/* configure rate limit */
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 15,
    message: 'Slow down there, cowboy. You have sent too many requests.'
});

/* middleware */
server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(limiter);

/* routes */
server.use('/api/food', foodRouter);
server.use(`${process.env.FOOD}`, aRouter);

/* endpoints */

// test //
server.get('/', (req, res) => {
    res.status(200).json({ api: 'online' });
});

module.exports = server;