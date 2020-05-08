/* connect to db */
const db = require('../../db/connect.js');

module.exports = {
    requestFood,
    getRequested
}

/* request a food to be added */
function requestFood(food) {
    return db('requests').insert(food, 'id');
}

/* get requested */
function getRequested() {
    return db('requests');
}