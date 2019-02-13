
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        { title:'Math', text: 'Do homework before Monday.' },
        { title:'CS', text: 'Review algorithms'}
      ]);
    });
};
