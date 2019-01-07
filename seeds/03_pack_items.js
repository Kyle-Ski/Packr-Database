
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "pack_items"; ALTER SEQUENCE pack_items_id_seq RESTART WITH 2;')
    .then(function () {
      // Inserts seed entries
      return knex('pack_items').insert([
        {id: 1, backpack_id: 1, item_id: 3 },
        {id: 2, backpack_id: 1, item_id: 8},
        {id: 3, backpack_id: 1, item_id: 9},
        {id: 4, backpack_id: 1, item_id: 11},
        {id: 5, backpack_id: 1, item_id: 12},
        {id: 6, backpack_id: 2, item_id: 1},
        {id: 7, backpack_id: 2, item_id: 2},
        {id: 8, backpack_id: 2, item_id: 3},
        {id: 9, backpack_id: 2, item_id: 4},
        {id: 10, backpack_id: 2, item_id: 5},
        {id: 11, backpack_id: 2, item_id: 6},
        {id: 12, backpack_id: 2, item_id: 7},
        {id: 13, backpack_id: 2, item_id: 8},
        {id: 14, backpack_id: 2, item_id: 9},
        {id: 15, backpack_id: 2, item_id: 10},
      ]);
    });
};
