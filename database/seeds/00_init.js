exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables

  const roles = [
    {
      name: "sales", // will get id 1
    },
    {
      name: "support", // will get id 2
    },
    {name: "supervisor"}
  ];

  return knex("departments")
    .insert(roles)
    .then(() => console.log("\n== Seed data for roles table added. ==\n"));
};
