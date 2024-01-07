import 'tailwindcss/tailwind.css'
import { Avator } from '@/components/atoms/Avator'

const TableRow = () => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th scope="row" className="flex items-center px-4 py-4 text-gray-900 whitespace-nowrap dark:text-white">
        <Avator />
      </th>
      <td className="px-4 py-4">
        <div className="text-sm text-gray-500 dark:text-gray-400 md:text-xl lg:text-2xl ">
        </div>
      </td>
      <td className="px-4 py-4">
      </td>
    </tr>
  )
}
export default TableRow;
