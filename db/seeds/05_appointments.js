console.log("seeding appointments");

exports.seed = function (knex, Promise) {
  return knex('appointments').del()
    .then(function () {
      return Promise.all([
        knex('appointments').insert({ id: 1, user_id: 1, user_staff_id: 1, start_time: 'March 28, 2018 10:00', status_id: 1, special_request: "bling" }),
        knex('appointments').insert({ id: 2, user_id: 2, user_staff_id: 2, start_time: 'March 28, 2018 10:00', status_id: 2, special_request: "professional" }),
        knex('appointments').insert({ id: 3, user_id: 3, user_staff_id: 3, start_time: 'Jan 1, 2018 11:00', status_id: 3, special_request: "extention for halloween" }),
        knex('appointments').insert({ id: 4, user_id: 4, user_staff_id: 4, start_time: 'March 28, 2018 13:00', status_id: 1, special_request: "not sure what I want!" }),
      ]);
    });
};