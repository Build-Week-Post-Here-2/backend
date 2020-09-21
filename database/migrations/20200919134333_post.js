
exports.up = function(knex) {
    return knex.schema
    .createTable("post", tbl => {
        tbl.increments();

        tbl.string("post_title", 128)
          .notNullable()
        
          tbl.text("post_content")
          .notNullable()

          tbl.boolean('Image').defaultTo(false)
          tbl.boolean('Video').defaultTo(false)
          tbl.boolean('External_link').defaultTo(false)
        
          tbl.text("Subreddits")
          .defaultTo("No predictions")

          tbl.integer('user_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('user')
          .onDelete('CASCADE')
          .onUpdate("CASCADE")
      })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('post')
};
