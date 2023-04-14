exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id').primary()
    table.string('user_name')
    table.string('first_name')
    table.string('last_name')
    table.string('email')
    table.string('age')
    table.string('country_origin')
    table.string('city')
    table.string('user_status')
    table.string('prim_language')
    table.string('english_level')
    table.string('sharing_one')
    table.string('sharing_two')
    table.string('sharing_three')
    table.string('description')
    table.string('profile_img')
    table.string('auth_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
