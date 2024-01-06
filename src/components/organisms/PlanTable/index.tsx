import TableHead from "./TableHead";
import TableRow from "./TableRow";
const PlanTable = () => {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 md:text-xl lg:text-2xl ">
      <TableHead/>
      <tbody>
        <TableRow/>
      </tbody>
    </table>
  )
}
export default PlanTable;

{/* <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 md:text-xl lg:text-2xl ">
<thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
  <tr>
    <th scope="col" class="px-4 py-3">
      Image
    </th>
    <th scope="col" class="px-4 py-3">
      Status
    </th>
    <th scope="col" class="px-4 py-3">
      Name
    </th>
    <th scope="col" class="px-4 py-3">
      Plan
    </th>
  </tr>
</thead>
<tbody>
  <?php foreach ($results as $result) { ?>
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th scope="row" class="flex items-center px-4 py-4 text-gray-900 whitespace-nowrap dark:text-white">
        <a href="./detail.php?id=<?= $result["user_id"] ?>">
          <img class="w-12 h-12 rounded-full" src="./assets/img/<?php print_r($result["user_image"]) ?>" alt="Jese image">
        </a>
      </th>
      <td class="px-4 py-4">
        <?= $result['user_posse'] . $result['user_grade'] ?>
      </td>
      <td class="px-4 py-4">
        <div class="text-sm text-gray-500 dark:text-gray-400 md:text-xl lg:text-2xl ">
          <?= $result['user_name'] ?>
        </div>
      </td>
      <td class="px-4 py-4">
        <?php $plans = explode(',', $result['plans']);
        foreach ($plans as $plan) { ?>
          <?= $plan ?><br>
        <?php } ?>
      </td>
    </tr>
  <?php } ?>
</tbody>
</table> */}
