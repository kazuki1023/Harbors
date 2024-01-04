import { useEffect } from 'react';
import { useRouter } from 'next/router';
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
          if (data.access_token) {
            fetch('/api/fetchProfile', {
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${data.access_token}`
              },
            })
              .then(response => response.json())
              .then(profileData => {
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
                  console.log(data.message);
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
  return (
    <BaseLayout>
      <div>Dashboard</div>
      <HeaderLogo />
      <CheckboxSection />
    </BaseLayout>
  )
}

export default Dashboard;
