import { NextApiRequest, NextApiResponse } from 'next';
export default async function getToken(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { code } = req.body;

      const clientId = process.env.NEXT_PUBLIC_LINE_CLIENT_ID || '';
      const redirectUri = process.env.NEXT_PUBLIC_LINE_REDIRECT_URI || '';
      const clientSecret = process.env.NEXT_PUBLIC_LINE_CLIENT_SECRET || '';
      console.log(redirectUri)
      console.log(encodeURIComponent(redirectUri))

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

// localhost3000
// https://access.line.me/oauth2/v2.1/login?returnUri=%2Foauth2%2Fv2.1%2Fauthorize%2Fconsent%3Fresponse_type%3Dcode%26client_id%3D2002588824%26redirect_uri%3Dhttp%253A%252F%252Flocalhost%253A3000%252Fdashboard%26state%3DwJhyuupFiUXjNhJMoPkrfx1sRlTEKwHQ%26scope%3Dprofile%2Bopenid%26nonce%3D9xKyQC2BXOZYZ75sIY5lBbCGjjdZk3GB&loginChannelId=2002588824&loginState=fe0eb67mANpCXY1yhtZMOs

// 本番環境
// https://access.line.me/oauth2/v2.1/login?returnUri=%2Foauth2%2Fv2.1%2Fauthorize%2Fconsent%3Fresponse_type%3Dcode%26client_id%3D2002591636%26redirect_uri%3Dhttps%253A%252F%252Fharbors.vercel.app%252Fdashboard%26state%3DlrlbCIHCHKBP725oDJw6hDKbVLh8W3Hz%26scope%3Dprofile%2Bopenid%26nonce%3DJ0drfRdmorfEzSvRf7ABbgoTwT5Mjg57&loginChannelId=2002591636&loginState=TyIv34g1Kqw09QZZlvjxF6
