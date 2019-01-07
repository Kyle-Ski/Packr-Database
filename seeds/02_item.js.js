
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "item"; ALTER SEQUENCE item_id_seq RESTART WITH 12;')
    .then(function () {
      // Inserts seed entries
      return knex('item').insert([
        {id: 1, name: 'tent', nfc: ''},
        {id: 2, name: 'stove', nfc: ''},
        {id: 3, name: 'knife', nfc: ''},
        {id: 4, name: 'sleeping bag', nfc: ''},
        {id: 5, name: 'first aid', nfc: ''},
        {id: 6, name: 'fuel', nfc: ''},
        {id: 7, name: 'sleeping pad', nfc: ''},
        {id: 8, name: 'hat', nfc: ''},
        {id: 9, name: 'boots', nfc: ''},
        {id: 10, name: 'food', nfc: ''},
        {id: 11, name: 'code', nfc: ''},
        {id: 12, name: 'water', nfc: ''}
      ]);
    });
};
