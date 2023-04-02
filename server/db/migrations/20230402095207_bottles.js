exports.up = (knex) => {
  return knex.schema.createTable('Bottles', (table) => {
    table.increments('id').primary()
    table.string('label')
    table.string('varietal')
    table.int('producer_id')
    table.string('region')
    table.int('year')
    table.string('alcohol_percentage')
    table.string('bottle_size')
    table.string('price')
    table.text('picture')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('Bottles')
}
