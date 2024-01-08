import TableHead from "./TableHead";
import TableRow from "./TableRow";
import { userTask } from '@/types/UserTask';

interface PlanTablePresentationProps {
  userTask: userTask[];
}
const PlanTablePresentation: React.FC<PlanTablePresentationProps> = ({userTask}) => {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 md:text-xl lg:text-2xl ">
      <TableHead/>
      <tbody>
        <TableRow userTask={userTask}/>
      </tbody>
    </table>
  )
}
export default PlanTablePresentation;
