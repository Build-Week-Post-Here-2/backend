
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('post').del()
    .then(function () {
      // Inserts seed entries
      return knex('post').insert([
        {id: 1, post_title: 'money', post_content: 'make more money', user_id: 1 },
        {id: 2, post_title: 'climate change', post_content: 'what do you know about climate change', user_id: 1 },
        {id: 3, post_title: 'tesla stock', post_content: 'Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California. ', user_id: 1 },
        {id: 4, post_title: 'coding', post_content: 'keep coding', user_id: 2 }
      ]);
    });
};
