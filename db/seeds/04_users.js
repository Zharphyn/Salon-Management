exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('users').insert({name: 'Alice', email: 'alice@alice.com',type_id:1,password:'$2a$10$4bLzLwKjvSmdwdwhL/wZoeyjv1lAqEO8TISJXNVXtjFPM4Cz4jtcW',phone_number:'7453487534'}),
    knex('users').insert({name: 'Brad', email: 'brad@brad.com',type_id:1,password:'$2a$10$4bLzLwKjvSmdwdwhL/wZoeyjv1lAqEO8TISJXNVXtjFPM4Cz4jtcW',phone_number:'7453487534'}),
    knex('users').insert({name: 'Grace', email: 'grace@grace.com',type_id:2,password:'$2a$10$4bLzLwKjvSmdwdwhL/wZoeyjv1lAqEO8TISJXNVXtjFPM4Cz4jtcW',phone_number:'7453487534'}),
    knex('users').insert({name: 'Di', email: 'di@di.com',type_id:3,password:'$2a$10$4bLzLwKjvSmdwdwhL/wZoeyjv1lAqEO8TISJXNVXtjFPM4Cz4jtcW',phone_number:'7453487534'})
  ]);
};
