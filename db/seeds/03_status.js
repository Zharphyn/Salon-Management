console.log("seeding status");


exports.seed = function (knex, Promise) {
  return knex('status').del()
    .then(function () {
      return Promise.all([
        knex('status').insert({ id: 1, status: 'Booked' }),
        knex('status').insert({ id: 2, status: 'Canceled' }),
        knex('status').insert({ id: 3, status: 'Completed' })
      ]);
    });
};