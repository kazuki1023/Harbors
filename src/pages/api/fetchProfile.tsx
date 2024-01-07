import { NextApiRequest, NextApiResponse } from 'next';

export default async function fetchProfile(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const accessToken = req.headers.authorization?.split(' ')[1];
      if (!accessToken) {
        return res.status(401).json({ message: 'アクセストークンが提供されていません。' });
      }

      const response = await fetch('https://api.line.me/v2/profile', {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });

      if (!response.ok) {
        throw new Error('プロファイル情報の取得に失敗しました。');
      }

      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: 'サーバーでエラーが発生しました。'});
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
