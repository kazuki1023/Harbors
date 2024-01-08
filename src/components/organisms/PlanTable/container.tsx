import PlanTablePresentation from "./presentation";
import { userTask } from '@/types/UserTask';

interface PlanTableContainerProps {
    userTask: userTask[];
}
export const PlanTableContainer: React.FC<PlanTableContainerProps> = ({userTask}) => {
    return (
        <PlanTablePresentation userTask={userTask}/>
    )
}
