
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "user"; ALTER SEQUENCE user_id_seq RESTART WITH 2;')
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {id: 1, first_name: 'Kyle', last_name: 'Czajkowski', email: 'skiroyjenkins@gmail.com', password: '123456'},
      ]);
    });
};
