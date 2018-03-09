exports.seed = function (knex, Promise) {
  return knex('work_schedules').del()
    .then(() => {
      return knex('appointments_products').del();
    })
    .then(() => {
      return knex('feedback').del();
    })
    .then(() => {
      return knex('products').del();
    })
    .then(() => {
      return knex('appointments').del();
    })
    .then(() => {
      return knex('users').del();
    })
    .then(() => {
      return knex('status').del();
    })
    .then(() => {
      return knex('product_types').del();
    })
    .then(() => {
      return knex('user_types').del();
    });
};
