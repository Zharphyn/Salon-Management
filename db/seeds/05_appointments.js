exports.seed = function (knex, Promise) {
  return Promise.all([
    knex('appointments').insert({ id: 1, user_id: 1, user_staff_id: 1, start_time: 'March 28, 2018 10:00', status_id: 1, special_request: "bling", end_time:'March 28, 2018 13:00' }),
    knex('appointments').insert({ id: 2, user_id: 2, user_staff_id: 2, start_time: 'March 28, 2018 10:00', status_id: 2, special_request: "professional", end_time:'March 28, 2018 11:00'}),
    knex('appointments').insert({ id: 3, user_id: 3, user_staff_id: 3, start_time: 'Jan 1, 2018 11:00', status_id: 3, special_request: "extention for halloween",end_time:'Jan 1, 2018 12:00' }),
    knex('appointments').insert({ id: 4, user_id: 4, user_staff_id: 4, start_time: 'March 28, 2018 13:00', status_id: 1, special_request: "not sure what I want!",end_time:'March 28, 2018 14:00'}),
  ]);
};
