import TableHead from "./TableHead";
import TableRow from "./TableRow";
const PlanTablePresentation = () => {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 md:text-xl lg:text-2xl ">
      <TableHead/>
      <tbody>
        <TableRow/>
      </tbody>
    </table>
  )
}
export default PlanTablePresentation;
