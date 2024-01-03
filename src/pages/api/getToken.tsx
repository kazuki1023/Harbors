import { NextApiRequest, NextApiResponse } from 'next';
export default async function getToken(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { code } = req.body;

      const clientId = process.env.NEXT_PUBLIC_LINE_CLIENT_ID || '';
      const redirectUri = process.env.NEXT_PUBLIC_LINE_REDIRECT_URI || '';
      const clientSecret = process.env.NEXT_PUBLIC_LINE_CLIENT_SECRET || '';

      const response = await fetch('https://api.line.me/oauth2/v2.1/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: redirectUri,
          client_id: clientId,
          client_secret: clientSecret
        })
      });

      const data = await response.json();

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: 'サーバーでエラーが発生しました。' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
