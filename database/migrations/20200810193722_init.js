
exports.up = function(knex) {
  return knex.schema
    .createTable("departments", tbl => {
        tbl
            .increments();
        tbl
            .string("name", 128)
            .notNullable()
            .unique();
    })
    .createTable("users", tbl => {
        tbl
            .increments();
        tbl
            .string("username", 128)
            .notNullable()
            .unique();
        tbl
            .string("password", 256)
            .notNullable();
        tbl
            .integer('role')
            .notNullable()
            .references("departments.name")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE")
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("departments").dropTableIfExists("users");
};
