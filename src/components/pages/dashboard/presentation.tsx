import BaseLayout from '@/layouts/BaseLayout';
import HeaderLogo from '@/components/organisms/HeadLogo';
import { CheckboxSection } from '@/components/organisms/CheckboxSection';
import { PlanTable } from '@/components/organisms/PlanTable';

interface DashboardPresentationProps {
  register: any;
  handleSubmit: any;
}

const DashboardPresentation: React.FC<DashboardPresentationProps> = ({ register, handleSubmit }) => {
  return (
    <BaseLayout>
      <div>DashboardPresentation</div>
      <HeaderLogo />
      <form onSubmit={handleSubmit}>
        <CheckboxSection register={register} />
        <button type="submit">登録</button>
      </form>
      <PlanTable />
    </BaseLayout>
  )
}

export default DashboardPresentation;
