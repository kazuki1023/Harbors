// pages/api/verifyToken.js
import { NextApiRequest, NextApiResponse } from 'next';

export default async function verifyToken(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { id_token, client_id } = req.body;

      const response = await fetch('https://api.line.me/oauth2/v2.1/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          id_token,
          client_id
        })
      });

      const data = await response.json();

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
