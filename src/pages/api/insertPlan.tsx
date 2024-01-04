// pages/api/insertPlan.js
import { sql } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function insertPlan(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // リクエストボディからデータを取得
      const { idToken, planIds } = req.body;

      await Promise.all(
        planIds.map((planId: number) => {
          return sql`
            INSERT INTO plans (userId, planId)
            VALUES (${idToken}, ${planId});
          `;
        })
      );

      res.status(200).json({ message: 'プランが挿入されました。' });
    } catch (error) {
      console.error('プランの挿入中にエラーが発生しました', error);
      res.status(500).json({ message: 'プランの挿入に失敗しました。' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
