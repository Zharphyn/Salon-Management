exports.seed = function (knex, Promise) {
  return Promise.all([
    knex('feedback').insert({ id: 1, user_id: 1, appointment_id: 1, comment: 'My nail looks amazing!' }),
    knex('feedback').insert({ id: 2, user_id: 2, appointment_id: 2, comment: 'My first manicure ever! It was super relaxing.' }),
    knex('feedback').insert({ id: 3, user_id: 3, appointment_id: 3, comment: 'I love my fancy nails!' }),
    knex('feedback').insert({ id: 4, user_id: 4, appointment_id: 4, comment: 'I will definitely come back again!'})
  ]);
};