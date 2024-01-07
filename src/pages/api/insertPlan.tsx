// pages/api/insertPlan.js
import { sql } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';
import { getIdbyuserId } from '@/scripts/getIdbyuserId';

export default async function insertPlan(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { userId, planIds } = req.body;
      const user_id = await getIdbyuserId(userId);

      await Promise.all(
        planIds.map((planId: number) => {
          return sql`
      INSERT INTO plans (userId, planId)
      VALUES (${user_id}, ${planId})
      ON CONFLICT (userId, planId)
      DO NOTHING
    `;
        })
      );

      res.status(200).json({ message: 'プランが挿入されました。' });
    } catch (error) {
      if (error instanceof Error) {
        console.error('プランの挿入中にエラーが発生しました', error);
        res.status(500).json({ message: 'プランの挿入に失敗しました。', error: error.message });
      } else {
        console.error('予期せぬエラー', error);
        res.status(500).json({ message: 'プランの挿入に失敗しました。', error: 'Unkown error' });
      }
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
