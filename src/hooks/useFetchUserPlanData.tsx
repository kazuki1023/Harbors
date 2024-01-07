import { useState, useCallback } from 'react';

const useFetchUserPlanData = (): [any[], () => void] => {
  const [userData, setUserData] = useState([]);

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
