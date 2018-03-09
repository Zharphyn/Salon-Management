exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('products').insert({id: 1, name: 'pretty nail 1', product_type_id: 1,photo_url:'Alice@Alice.com',duration:3600,description:'7453487534',price:5}),
    knex('products').insert({id: 2, name: 'pretty nail 2', product_type_id: 2,photo_url:'Alice@Alice.com',duration:3600,description:'7453487534',price:6}),
    knex('products').insert({id: 3, name: 'pretty nail 3', product_type_id: 3,photo_url:'Alice@Alice.com',duration:3600,description:'7453487534',price:7}),
    knex('products').insert({id: 4, name: 'pretty nail 4', product_type_id: 3,photo_url:'Alice@Alice.com',duration:3600,description:'7453487534',price:8})
  ]);
};
