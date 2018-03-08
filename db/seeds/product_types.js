exports.seed = function(knex, Promise) {
  return knex('product_types').del()
    .then(function () {
      return Promise.all([
        knex('product_types').insert({id: 1, type: 'Soft Gel'}),
        knex('product_types').insert({id: 2, type: 'Hard Gel'}),
        knex('product_types').insert({id: 3, type: 'Fill'})
      ]);
    });
};
