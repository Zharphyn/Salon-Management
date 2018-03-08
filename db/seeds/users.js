exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 1, name: 'Alice', email: 'Alice@Alice.com',type_id:1,password:'123',phone_number:'7453487534'}),
        knex('users').insert({id: 2, name: 'Brad', email: 'Brad@Brad.com',type_id:1,password:'123',phone_number:'7453487534'}),
        knex('users').insert({id: 3, name: 'Grace', email: 'Grace@Grace.com',type_id:1,password:'123',phone_number:'7453487534'}),
        knex('users').insert({id: 4, name: 'Di', email: 'Di@Di.com',type_id:1,password:'123',phone_number:'7453487534'})
      ]);
    });
};
