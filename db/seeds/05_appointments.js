exports.seed = function (knex, Promise) {
  return Promise.all([
    knex('appointments').insert({ user_id: 1, user_staff_id: 1, start_time: 'March 12, 2018 10:00', status_id: 1, special_request: "bling", end_time:'March 12, 2018 11:00' }),
    knex('appointments').insert({ user_id: 2, user_staff_id: 2, start_time: 'March 12, 2018 11:00', status_id: 1, special_request: "professional", end_time:'March 12, 2018 12:00'}),
    knex('appointments').insert({ user_id: 3, user_staff_id: 3, start_time: 'March 12, 2018 12:00', status_id: 1, special_request: "extention for halloween",end_time:'March 12, 2018 13:00' }),
    knex('appointments').insert({ user_id: 4, user_staff_id: 4, start_time: 'March 12, 2018 13:00', status_id: 1, special_request: "not sure what I want!",end_time:'March 12, 2018 14:00'}),
  ]);
};
