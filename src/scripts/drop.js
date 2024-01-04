const { sql } = require('@vercel/postgres');
async function dropUsersTable() {
  try {
    await sql`
      DROP TABLE IF EXISTS users;
    `;
    console.log(`Dropped "users" table`);
  } catch (error) {
    console.error('Error dropping users table:', error);
    throw error;
  }
}
async function dropTasksTable() {
  try {
    await sql`
      DROP TABLE IF EXISTS tasks;
    `;
    console.log(`Dropped "tasks" table`);
  } catch (error) {
    console.error('Error dropping tasks table:', error);
    throw error;
  }
}
async function dropPlansTable() {
  try {
    await sql`
      DROP TABLE IF EXISTS plans;
    `;
    console.log(`Dropped "plans" table`);
  } catch (error) {
    console.error('Error dropping plans table:', error);
    throw error;
  }
}
(async ()=>{
  await dropPlansTable();
  await dropUsersTable();
  await dropTasksTable();
})();
