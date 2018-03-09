exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('product_types').insert({id: 1, type: 'Soft Gel'}),
    knex('product_types').insert({id: 2, type: 'Hard Gel'}),
    knex('product_types').insert({id: 3, type: 'Fill'})
  ]);
};
