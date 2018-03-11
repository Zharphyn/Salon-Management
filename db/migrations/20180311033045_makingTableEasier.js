exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('appointments', (table) => {
      table.dateTime('end_time');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('appointments', function (table) {
      table.dropColumn('end_time');
    })
  ])
  .catch((err) => {
    console.log(err.message);
  })

};
