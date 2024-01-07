export const verifyLineToken = async (idToken: any, clientId: any) => {
  try {
    const response = await fetch('https://api.line.me/oauth2/v2.1/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        id_token: idToken,
        client_id: clientId
      })
    });

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error_description);
    }

    return data; // トークン検証成功
  } catch (error) {
    console.error('IDトークンの検証中にエラーが発生しました', error);
    throw error; // エラーを再スロー
  }
};
