import { sql } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';
import { getIdbyuserId } from '@/scripts/getIdbyuserId';
import getUserIdByIdToken from '@/utils/getUserIdByIdToken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { id_token } = req.body;
      const userId = await getUserIdByIdToken(id_token);
      const user_id = await getIdbyuserId(userId);
      console.log(user_id);
      const response = await sql`
        SELECT tasks.Task, users.picture, users.name, plans.userId
        FROM plans
        INNER JOIN tasks
        ON plans.planId = tasks.id
        INNER JOIN users
        ON plans.userId = users.id
        WHERE plans.userId = ${user_id}
      `;

      res.status(200).json(response.rows);
    } catch (error) {
      console.error('Error fetching user data:', error);
      res.status(500).json({ message: 'plansの取得に失敗しました。' });
    }
  }
}
