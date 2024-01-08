import PlanTablePresentation from "./presentation";
import { userTask } from '@/types/UserTask';

interface PlanTableContainerProps {
    userTask: userTask[];
}
export const PlanTableContainer: React.FC<PlanTableContainerProps> = ({ userTask }) => {
    const transformedData: any = {};

    userTask.forEach(item => {
        if (!transformedData[item.userid]) {
            transformedData[item.userid] = {
                userID: item.userid,
                picture: item.picture,
                displayName: item.name,
                tasks: []
            };
        }
        transformedData[item.userid].tasks.push(item.task);
    });

    const taskGroupedByUser = Object.values(transformedData);
    console.log(taskGroupedByUser);

    return (
        <PlanTablePresentation userTask={userTask} />
    )
}
