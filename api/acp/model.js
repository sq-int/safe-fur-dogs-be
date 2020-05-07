const db = require('../../db/connect');

module.exports = {
    r,
    fb,
    g,
    del
};

function g() {
    return db('tools');
}

function r(u) {
    return db('tools').insert(u, 'id');
}

function fb(f) {
    return db('tools')
        .select('id', 'un', 'p')
        .where(f);
}

function del(i) {
    return db('tools')
        .where('tools.id', i)
        .del();
}