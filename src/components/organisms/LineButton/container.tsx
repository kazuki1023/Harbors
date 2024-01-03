import  LineButtonPresentation  from "./presentation";
import generateRandomString from '@/utils/generateRandomString';

export const LineButtonContainer = () => {
  const handleLogin = () => {
    const state = generateRandomString();
    const nonce = generateRandomString();

    const clientId = process.env.NEXT_PUBLIC_LINE_CLIENT_ID;
    console.log(clientId);
    const redirectUri = encodeURI("https://harbors.vercel.app/dashboard")
    console.log(redirectUri);
    const scope = 'profile%20openid';

    const url = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=${scope}&nonce=${nonce}`;
    window.location.href = url; // ユーザーを認証URLにリダイレクトする
  };
  return (
    <LineButtonPresentation onClick={handleLogin}/>
  )
}

