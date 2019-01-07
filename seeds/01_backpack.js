
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "backpack"; ALTER SEQUENCE backpack_id_seq RESTART WITH 2;')
    .then(function () {
      // Inserts seed entries
      return knex('backpack').insert([
        {id: 1, name: 'hiking', complete: 1, check: 1, user_id: 1},
      ]);
    });
};
