exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('user_types', (table) => {
      table.increments('id');
      table.string('type');
    }),
    knex.schema.createTable('product_types', (table) => {
      table.increments('id');
      table.string('type');
    }),
    knex.schema.createTable('status', (table) => {
      table.increments('id');
      table.string('status');
    }),
    knex.schema.createTable('users', (table) => {
      table.increments('id');
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('password').notNullable();
      table.string('phone_number').notNullable();
      table.integer('type_id').unsigned();
      table.foreign('type_id').references('user_types.id');
    }),
    knex.schema.createTable('appointments', (table) => {
      table.increments('id');
      table.string('special_request');
      table.dateTime('start_time');
      table.integer('status_id').unsigned();
      table.foreign('status_id').references('status.id');
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('users.id');
      table.integer('user_staff_id').unsigned();
      table.foreign('user_staff_id').references('users.id');
    }),
    knex.schema.createTable('products', (table) => {
      table.increments('id');
      table.string('name').notNullable();
      table.string('description').notNullable();
      table.string('photo_url').notNullable();
      table.integer('duration').notNullable();
      table.integer('price').notNullable();
      table.integer('product_type_id').unsigned();
      table.foreign('product_type_id').references('product_types.id');
    }),
    knex.schema.createTable('feedback', (table) => {
      table.increments('id');
      table.string('comment');
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('users.id');
      table.integer('appointment_id').unsigned();
      table.foreign('appointment_id').references('appointments.id');
    }),
    knex.schema.createTable('appointments_products', (table) => {
      table.increments('id');
      table.integer('appointment_id').unsigned();
      table.foreign('appointment_id').references('appointments.id');
      table.integer('product_id').unsigned();
      table.foreign('product_id').references('products.id');
    }),
    knex.schema.createTable('work_schedules', (table) => {
      table.increments('id');
      table.date('date');
      table.dateTime('shift_start');
      table.dateTime('shift_end');
      table.string('phone_number');
      table.integer('user_staff_id').unsigned();
      table.foreign('user_staff_id').references('users.id');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('work_schedules'),
    knex.schema.dropTable('appointments_products'),
    knex.schema.dropTable('feedback'),
    knex.schema.dropTable('products'),
    knex.schema.dropTable('appointments'),
    knex.schema.dropTable('users'),
    knex.schema.dropTable('status'),
    knex.schema.dropTable('product_types'),
    knex.schema.dropTable('user_types')
  ])
};
