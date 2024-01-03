import Checkbox from '@/components/atoms/Checkbox';
import { checkList } from '@/utils/checkList';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
// import GenerateNameClassSafelist from '@/utils/generateClassSafelist';
import { getLabelColors } from '@/utils/getLabelColors';

interface CheckList {
  id: number;
  label: string;
  checked: boolean;
  color: []
}

export const CheckboxSectionPresentation: React.FC = () => {
  const { register, handleSubmit, watch } = useForm();
  const [checkLists, setCheckLists] = useState<CheckList[]>(checkList);
  return (
    <div className="flex flex-col items-center justify-center">
      {checkLists.map((check) => (
        <Checkbox
          id={check.id}
          key={check.id}
          label={check.label}
          register={register}
          color={getLabelColors(check.label)}
        />
      ))}
    </div>
  )
}
