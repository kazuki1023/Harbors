import 'tailwindcss/tailwind.css'
import { Avator } from '@/components/atoms/Avator'
import { userTaskLGroup } from '@/types/userTask';
interface TableRowProps {
  userTask: userTaskLGroup[];
}

const TableRow: React.FC<TableRowProps> = ({userTask}) => {
  console.log(userTask)
  return (
    userTask.map((user) => (
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th scope="row" className="flex items-center px-4 py-4 text-gray-900 whitespace-nowrap dark:text-white">
        <Avator picture={user.picture}/>
      </th>
      <td className="px-4 py-4">
        <div className="text-sm text-gray-500 dark:text-gray-400 md:text-xl lg:text-2xl ">
          {user.displayName}
        </div>
      </td>
      <td className="px-4 py-4">
        {user.tasks.map((task) => (
          <div className="text-sm text-gray-500 dark:text-gray-400 md:text-xl lg:text-2xl ">
            {task}
          </div>
        )
        )}
      </td>
    </tr>
    ))
  )
}
export default TableRow;
