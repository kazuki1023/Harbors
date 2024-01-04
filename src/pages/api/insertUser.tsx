import { sql } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { userId, name, picture } = req.body;
      // データベースにユーザー情報を挿入する
      await sql`
        INSERT INTO users (id_token, name, picture)
        VALUES (${userId}, ${name}, ${picture})
        ON CONFLICT (id_token) DO NOTHING
      `;

      res.status(200).json({ message: '新しいユーザーを挿入しました。' });
    } catch (error) {
      console.error('Error inserting user:', error);
      res.status(500).json({ message: 'ユーザー情報の挿入に失敗しました。' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
