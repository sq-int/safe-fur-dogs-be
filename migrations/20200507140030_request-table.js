
exports.up = function (knex) {
    return knex.schema.createTable('requests', tbl => {
        tbl.increments();

        tbl.string('food', 255)
            .notNullable();

        tbl.boolean('safe')
            .notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('requests');
};
