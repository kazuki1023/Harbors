import PlanTablePresentation from "./presentation";
import { userTask, userTaskLGroup } from '@/types/userTask';

interface PlanTableContainerProps {
    userTask: userTask[];
}
export const PlanTableContainer: React.FC<PlanTableContainerProps> = ({ userTask }) => {
    const transformedData: any = {};


    if(userTask.length > 0) {
        userTask.forEach(item => {
            if (!transformedData[item.userid]) {
                transformedData[item.userid] = {
                    userid: item.userid,
                    picture: item.picture,
                    displayName: item.name,
                    tasks: []
                };
            }
            transformedData[item.userid].tasks.push(item.task);
        });
    }

    const taskGroupedByUser: userTaskLGroup[] = Object.values(transformedData);

    return (
        <PlanTablePresentation userTask={taskGroupedByUser} />
    )
}
