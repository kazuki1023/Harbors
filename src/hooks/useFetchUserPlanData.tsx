import { useState, useCallback } from 'react';
import  { userTask } from '@/types/UserTask';
const useFetchUserPlanData = (): [userTask[], () => void] => {
  const [userData, setUserData] = useState<userTask[]>([]);

  const fetchUserData = useCallback(() => {
    fetch('/api/fetchPlans', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id_token: localStorage.getItem('id_token')
      })
    })
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('ユーザーデータの取得中にエラーが発生しました', error));
  }, []);

  return [userData, fetchUserData];
};

export default useFetchUserPlanData;
