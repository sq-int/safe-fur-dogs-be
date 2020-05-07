const jwt = require('jsonwebtoken');
const secrets = require('../db/sec.js');

module.exports = {
    generateToken
}

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.un
    }

    const options = {
        expiresIn: '1d'
    }

    return jwt.sign(payload, secrets.jwtS, options);
}