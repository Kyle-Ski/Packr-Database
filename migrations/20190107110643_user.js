exports.up = function(knex, Promise) {
    return knex.schema.createTable('user', function (table) {
        table.increments()
        table.string('first_name')
        table.string('last_name')
        table.string('email')
        table.string('password', 500)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('user')
};