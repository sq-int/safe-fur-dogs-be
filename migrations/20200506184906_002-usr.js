
exports.up = function (knex) {
    return knex.schema.createTable('tools', tbl => {
        tbl.increments();

        tbl.string('un', 255)
            .notNullable()
            .unique();

        tbl.string('p', 255)
            .notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('tools');
};
