require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

/* bring in routers */
const foodRouter = require('./food/router');
const aRouter = require('./acp/router');

/* middleware */
server.use(express.json());
server.use(cors());
server.use(helmet());

/* routes */
server.use('/api/food', foodRouter);
server.use(`${process.env.FOOD}`, aRouter);

/* endpoints */

// test //
server.get('/', (req, res) => {
    res.status(200).json({ api: 'online' });
});

module.exports = server;