
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments()
    table.text("email")
    table.text("password")
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
}
