import  LineButtonPresentation  from "./presentation";
import generateRandomString from '@/utils/generateRandomString';

export const LineButtonContainer = () => {
  const handleLogin = () => {
    const state = generateRandomString();
    const nonce = generateRandomString();

    const clientId = '1234567890'; // LINE Developersコンソールから取得したクライアントID
    const redirectUri = encodeURIComponent('https://harbors.vercel.app/dashboard');
    const scope = 'profile%20openid';

    const url = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=${scope}&nonce=${nonce}`;
    window.location.href = url; // ユーザーを認証URLにリダイレクトする
  };
  return (
    <LineButtonPresentation />
  )
}
