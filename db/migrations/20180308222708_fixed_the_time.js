
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('work_schedules', function (table) {
      table.dropColumn('date');
    })
  ])
  .catch((err) => {
    console.log(err.message);
  })
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('work_schedules', function (table) {
      table.date('date');
    })
  ])
  .catch((err) => {
    console.log(err.message);
  })
};
