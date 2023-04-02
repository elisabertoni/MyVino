exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('producers')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('producers').insert([
        { id: 1, name: 'Church Road', country: 'New Zealand', region: 'Hawkes Bay'},
        { id: 2, name: 'Craggy Range', country: 'New Zealand', region: 'Hawkes Bay'},
        { id: 3, name: 'Zidarich', country: 'Italy', region: 'Friuli Venezia Giulia'},
      ])
    })
}
