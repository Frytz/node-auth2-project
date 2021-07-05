const db = require("../database/db_config.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
  findByRole
};

function find(role) {
  
  return db("users").select("id", "username", "role").where('role', role).orderBy("id");
}

function findBy(filter) {
  return db("users").where(filter).orderBy("id");
}

async function add(user) {
  try {
    const [id] = await db("users").insert(user, "id");

    return findById(id);
  } catch (error) {
    throw error;
  }
}

function findById(id) {
  return db("users").where({ id }).first();
}

async function findByRole() {
  
  try {
    const roles = await req.user.role
  return db.select("*").from("users").where({id})
}
catch (error) {
  throw error;
}
}
