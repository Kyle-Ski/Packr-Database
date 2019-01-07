exports.up = function(knex, Promise) {
    return knex.schema.createTable('backpack', function (table) {
        table.increments()
        table.string('name')
        table.integer('complete')
        table.integer('check')
        table.integer('user_id').references('user.id').unsigned().onDelete('cascade')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('backpack')
};