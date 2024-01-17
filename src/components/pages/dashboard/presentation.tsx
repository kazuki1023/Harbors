import BaseLayout from '@/layouts/BaseLayout';
import HeaderLogo from '@/components/organisms/HeadLogo';
import { CheckboxSection } from '@/components/organisms/CheckboxSection';
import { PlanTable } from '@/components/organisms/PlanTable';
import { userTask } from '@/types/userTask';

interface DashboardPresentationProps {
  register: any;
  handleSubmit: any;
  userTask: userTask[];
}

const DashboardPresentation: React.FC<DashboardPresentationProps> = ({ register, handleSubmit, userTask }) => {
  return (
    <BaseLayout>
      <div>DashboardPresentation</div>
      <HeaderLogo />
      <form onSubmit={handleSubmit}>
        <CheckboxSection register={register} />
        <button type="submit">登録</button>
      </form>
      <PlanTable userTask={userTask}/>
    </BaseLayout>
  )
}

export default DashboardPresentation;
