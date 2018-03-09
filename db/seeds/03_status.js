exports.seed = function (knex, Promise) {
  return Promise.all([
    knex('status').insert({ id: 1, status: 'Booked' }),
    knex('status').insert({ id: 2, status: 'Canceled' }),
    knex('status').insert({ id: 3, status: 'Completed' })
  ]);
};