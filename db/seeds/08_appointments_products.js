exports.seed = function (knex, Promise) {
  return Promise.all([
    knex('appointments_products').insert({ id: 1, appointment_id: 1, product_id: 1 }),
    knex('appointments_products').insert({ id: 2, appointment_id: 2, product_id: 2 }),
    knex('appointments_products').insert({ id: 3, appointment_id: 3, product_id: 3 }),
    knex('appointments_products').insert({ id: 4, appointment_id: 4, product_id: 4 })
  ]);
};
