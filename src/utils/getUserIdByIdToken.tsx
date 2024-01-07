import { verifyLineToken } from "./verifyLineToken";
const getUserIdByIdToken = async (idToken: any) => {
  try {
    const response = await verifyLineToken(idToken, process.env.NEXT_PUBLIC_LINE_CLIENT_ID);
    return response.sub;
  } catch (error) {
    console.error('トークン検証中にエラーが発生しました', error);
    throw error;
  }
};

export default getUserIdByIdToken;
