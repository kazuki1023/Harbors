const { sql } = require('@vercel/postgres');
export async function getIdbyuserId(idToken) {
  try {
    const result = await sql`
      SELECT id FROM users WHERE id_token = ${idToken};
    `;
    return result.rows[0].id;
  } catch (error) {
    console.error('Error getting user id:', error);
    throw error;
  }
}
