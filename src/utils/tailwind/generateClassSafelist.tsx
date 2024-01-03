import { checkList } from "../const/checkList";

const GenerateNameClassSafelist = () => {
  return checkList.flatMap(item => [
    `text-${item.color}-100`,
    `bg-${item.color}-800`,
    `border-${item.color}-100`
  ]);
};

export default GenerateNameClassSafelist;
