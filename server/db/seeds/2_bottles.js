exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('bottles')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('bottles').insert([
        { id: 1, label: 'Grand Reserve', varietal: 'Chardonnay', producer_id: 1, region: 'Hawkes Bay', year: 2019, alcohol_percentage: '13%', bottle_size: '750ml', price: '35NZD', picture: 'https://www.church-road.com/pub/media/catalog/product/cache/b248a0854073e9d8a9c3a98f1268dec1/8/0/804311_1_2_1_.png' },

      ])
    })
}
