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
    windowMs: 20 * 60 * 1000,
    max: 20,
    message: 'Slow down there, cowboy. You have sent too many requests. We limit searches currently as Safe Fur Dogs is a free service. Please wait some time before submitting another request, or consider using the coffee icon on the website to buy us a coffee so we can increase our limits.'
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