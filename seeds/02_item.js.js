
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "item"; ALTER SEQUENCE item_id_seq RESTART WITH 13;')
    .then(function () {
      // Inserts seed entries
      return knex('item').insert([
        {id: 1, name: 'Tent', nfc: ''},
        {id: 2, name: 'Stove', nfc: ''},
        {id: 3, name: 'Knife', nfc: ''},
        {id: 4, name: 'Sleeping bag', nfc: ''},
        {id: 5, name: 'First Aid', nfc: ''},
        {id: 6, name: 'Fuel', nfc: ''},
        {id: 7, name: 'Sleeping Pad', nfc: ''},
        {id: 8, name: 'Hat', nfc: ''},
        {id: 9, name: 'Boots', nfc: ''},
        {id: 10, name: 'Food', nfc: ''},
        {id: 11, name: 'Code', nfc: ''},
        {id: 12, name: 'water', nfc: ''}
      ]);
    });
};
