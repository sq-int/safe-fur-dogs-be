require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const server = express();

/* bring in routers */
const foodRouter = require('./food/router');
const requestRouter = require('./requested/router');

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
server.use('/api/request', requestRouter);

/* endpoints */

// test //
server.get('/wakeup', (req, res) => {
    res.send('<h2>WAKE ME UP</h2>');
});

module.exports = server;