
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "backpack"; ALTER SEQUENCE backpack_id_seq RESTART WITH 3;')
    .then(function () {
      // Inserts seed entries
      return knex('backpack').insert([
        {id: 1, name: 'hiking', complete: 1, check: 1, user_id: 1},
        {id: 2, name: '7 Day Trip', complete: 2, check: 1, user_id: 1},
      ]);
    });
};
