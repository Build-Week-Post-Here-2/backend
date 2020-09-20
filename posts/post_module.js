const db = require('../database/connection')

module.exports = {
    find,
    findBy,
    findById,
    add,
    remove,
    update,
    
}

// get all posts
function find() {
     return db('post')
}

// get a post by filter
function findBy(filter) {
    return find().where(filter)
}

// get a post by ID
function findById(id) {
    return find().where({id}).first()
}

// add a post 
async function add(post) {
    try {
        const [id] = await find().insert(post, "id");

        return findById(id);
    } catch (error) {
        throw error;
    }
}

// delete a post 
function remove(id) {
  return  findById(id).del()
}

// update a post 
function update(updating, id) {
    return findById(id).update(updating)
    .then(()=> findById(id))
}

// // get a user posts  using user Id
// function findUserPosts (id) {
//     return find()
//       .select(
//         "post.id",
//         "post.post_title",
//         "post.post_content",
//         "post.user_id",
//         "user.username"
//       )
//       .join("user", function() {
//         this.on({ "user.id": "post.user_id" });
//       })
//       .orderBy("post.id")
//       .where({ "user.id": id });
//   }