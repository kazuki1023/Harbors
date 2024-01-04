import { tasks } from "@/scripts/placeholder-data"
interface CheckList {
  id: number;
  label: string;
}
export const checkList: CheckList[] = tasks.map((task) => {
  return {
    id: task.id,
    label: task.task,
  }
})
