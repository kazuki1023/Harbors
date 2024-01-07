// pages/api/verifyToken.js
import { NextApiRequest, NextApiResponse } from 'next';
import { verifyLineToken } from '@/utils/verifyLineToken';

export default async function verifyToken(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { id_token, client_id } = req.body;

      const data = await verifyLineToken(id_token, client_id);
      res.status(200).json(data);

      if (data.error) {
        throw new Error(data.error_description);
      }

      // トークン検証成功
      res.status(200).json(data);
    } catch (error) {
      console.error('IDトークンの検証中にエラーが発生しました', error);
      res.status(500).json({ message: 'IDトークンの検証に失敗しました。' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
