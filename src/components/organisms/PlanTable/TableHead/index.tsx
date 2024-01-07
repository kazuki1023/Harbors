import 'tailwindcss/tailwind.css'
const TableHead = () => {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-4 py-3">
          Image
        </th>
        <th scope="col" className="px-4 py-3">
          Name
        </th>
        <th scope="col" className="px-4 py-3">
          Plan
        </th>
      </tr>
    </thead>
  )
}
export default TableHead;
