exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('user_types').insert({id: 1, type: 'Customer'}),
    knex('user_types').insert({id: 2, type: 'Staff'}),
    knex('user_types').insert({id: 3, type: 'Admin'})
  ]);
};
