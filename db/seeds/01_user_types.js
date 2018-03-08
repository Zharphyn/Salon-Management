exports.seed = function(knex, Promise) {
  // return knex('user_types').del()
  return knex.raw('truncate table user_types cascade')
    .then(function () {
      return Promise.all([
        knex('user_types').insert({id: 1, type: 'Customer'}),
        knex('user_types').insert({id: 2, type: 'Staff'}),
        knex('user_types').insert({id: 3, type: 'Admin'})
      ]);
    });
};
