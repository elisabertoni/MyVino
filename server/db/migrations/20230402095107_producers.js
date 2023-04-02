exports.up = (knex) => {
  return knex.schema.createTable('Producers', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('country')
    table.string('region')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('Producers')
}
