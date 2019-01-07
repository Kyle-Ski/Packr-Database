exports.up = function(knex, Promise) {
    return knex.schema.createTable('pack_items', function (table) {
        table.increments()
        table.integer('backpack_id').references('backpack.id').unsigned().onDelete('cascade')
        table.integer('item_id').references('item.id').unsigned().onDelete('cascade')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('pack_items')
};