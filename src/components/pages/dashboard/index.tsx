import  BaseLayout  from '@/layouts/BaseLayout';
import HeaderLogo from '@/components/organisms/HeadLogo';
import { CheckboxSection } from '@/components/organisms/CheckboxSection';

const Dashboard = ()=> {
  return (
    <BaseLayout>
      <div>Dashboard</div>
      <HeaderLogo />
      <CheckboxSection />
    </BaseLayout>
  )
}

export default Dashboard;
