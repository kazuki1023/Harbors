const { sql } = require('@vercel/postgres');
const { tasks } = require('./placeholder-data');

async function createUsersTable() {
  try {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // "users"テーブルを作成する
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        id_token TEXT NOT NULL UNIQUE,
        name VARCHAR(255) NOT NULL,
        picture TEXT ,
        createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
      );
    `;

    console.log(`Created "users" table`);
  } catch (error) {
    console.error('Error creating users table:', error);
    throw error;
  }
}
async function createTasksTable() {
  try {
    // "tasks"テーブルを作成する
    await sql`
      CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY,
        task TEXT NOT NULL
      );
    `;
    console.log(`Created "tasks" table`);

    const insertedTasks = await Promise.all(
      tasks.map((task) => {
        return sql`
          INSERT INTO tasks (id, task)
          VALUES (${task.id}, ${task.task})
          ON CONFLICT (id) DO NOTHING;
        `;
      })
    );
    console.log(`Seeded ${insertedTasks.length} tasks`);

  } catch (error) {
    console.error('Error creating tasks table:', error);
    throw error;
  }
}

async function createPlansTable() {
  try {
    // "plans"テーブルを作成する
    await sql`
      CREATE TABLE IF NOT EXISTS plans (
        id SERIAL PRIMARY KEY,
        planId INTEGER REFERENCES tasks(id),
        userId INTEGER REFERENCES users(id),
        UNIQUE (userId, planId)
      );
    `;

    console.log(`Created "plans" table`);
  } catch (error) {
    console.error('Error creating plans table:', error);
    throw error;
  }
}

(async () => {
  await createUsersTable();
  await createTasksTable();
  await createPlansTable();
})();
