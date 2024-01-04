import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import BaseLayout from '@/layouts/BaseLayout';
import HeaderLogo from '@/components/organisms/HeadLogo';
import { CheckboxSection } from '@/components/organisms/CheckboxSection';

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    const { code } = router.query;
    if (code) {
      fetch('/api/getToken', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code: code })
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          localStorage.setItem('id_token', data.id_token);
          if (data.access_token) {
            fetch('/api/fetchProfile', {
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${data.access_token}`
              },
            })
              .then(response => response.json())
              .then(profileData => {
                console.log(profileData);
                fetch('/api/insertUser', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    userId: profileData.userId,
                    name: profileData.displayName,
                    picture: profileData.pictureUrl
                  })
                })
                  .then(response => response.json())
                  .then(data => {
                    console.log(data.id);
                  })
                  .catch(error => {
                    console.error('ユーザー情報の挿入中にエラーが発生しました', error);
                  });
              })
              .catch(error => {
                console.error('トークン検証中にエラーが発生しました', error);
              });
          }
        })
        .catch(error => {
          console.error('トークン交換中にエラーが発生しました', error);
        });
    }
  }, [router.query]);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
    const idToken = localStorage.getItem('id_token');
    if (!idToken) {
      console.error('IDトークンが見つかりません');
      return;
    }
    const planIds = data.checkedPlans; // フォームから取得したプランIDの配列
    fetch('/api/insertPlan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        idToken,
        planIds
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log('プランが挿入されました', data);
      })
      .catch(error => {
        console.error('プランの挿入中にエラーが発生しました', error);
      });
  };
  return (
    <BaseLayout>
      <div>Dashboard</div>
      <HeaderLogo />
      <form onSubmit={handleSubmit(onSubmit)}>
        <CheckboxSection register={register} />
        <button type="submit">送信</button>
      </form>
    </BaseLayout>
  )
}

export default Dashboard;
