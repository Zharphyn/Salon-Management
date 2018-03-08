exports.seed = function (knex, Promise) {
  return knex('work_schedules').del()
    .then(function () {
      return Promise.all([
        knex('work_schedules').insert({ id: 1, user_staff_id: 1, shift_start: 'Jan 1, 2018 10:00', shift_end: 'Jan 1, 2018 19:00' }),
        knex('work_schedules').insert({ id: 2, user_staff_id: 2, shift_start: 'March 28, 2018 10:00', shift_end: 'March 28, 2018 19:00' }),
        knex('work_schedules').insert({ id: 4, user_staff_id: 4, shift_start: 'October 29, 2018 10:00', shift_end: 'October 29, 2018 19:00' }), 
        knex('work_schedules').insert({ id: 3, user_staff_id: 3, shift_start: 'March 20, 2018 10:00', shift_end: 'March 28, 2018 19:00' })
      ])
    });
};
