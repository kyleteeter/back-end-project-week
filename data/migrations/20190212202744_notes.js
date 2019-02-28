
exports.up = function(knex, Promise) {
    return knex.schema.createTable('notes', table => {
      table.increments();
      table.string('title', 255).notNullable();
      table.string('text').notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    // undo the operation in up
    return knex.schema.dropTableIfExists('notes');
  };
