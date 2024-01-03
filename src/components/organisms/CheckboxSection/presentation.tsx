import Checkbox from '@/components/atoms/Checkbox';
import { useForm, UseFormRegister } from 'react-hook-form';
import { useState } from 'react';
import { checkList } from '@/utils/const/checkList';
import GenerateNameClassSafelist from '@/utils/tailwind/generateClassSafelist';

interface CheckList {
  id: number;
  name: string;
  checked: boolean;
  color: string;
}

export const CheckboxSectionPresentation: React.FC = () => {
  const { register, handleSubmit, watch } = useForm();
  const [checkLists, setCheckLists] = useState<CheckList[]>(checkList);
  console.log(GenerateNameClassSafelist());
  console.log([... GenerateNameClassSafelist()])
  return (
    <div className="flex flex-col items-center justify-center">
      {checkLists.map((check) => (
        <Checkbox
          id={check.id}
          key={check.id}
          label={check.name}
          register={register}
          name={check.name}
          color={check.color}
        />
      ))}
    </div>
  )
}
