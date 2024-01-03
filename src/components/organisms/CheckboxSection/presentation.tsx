import Checkbox from '@/components/atoms/Checkbox';
import { useForm, UseFormRegister } from 'react-hook-form';
import { useState } from 'react';

interface CheckList {
  id: number;
  name: string;
  checked: boolean;
  color: string;
}


export const CheckboxSectionPresentation: React.FC = () => {
  const { register, handleSubmit, watch } = useForm();
  const [checkList, setCheckList] = useState<CheckList[]>([
    {
      id: 1,
      name: 'test',
      checked: false,
      color: 'blue',
    },
    {
      id: 2,
      name: 'test2',
      checked: false,
      color: 'red',
    },
    {
      id: 3,
      name: 'test3',
      checked: false,
      color: 'yellow',
    },
  ]);
  return (
    <div className="flex flex-col items-center justify-center">
      {checkList.map((check) => (
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
