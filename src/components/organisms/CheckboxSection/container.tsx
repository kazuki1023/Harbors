import  { CheckboxSectionPresentation }  from './presentation';
import { UseFormRegister, useForm } from 'react-hook-form';
interface CheckboxSectionProps {
  register: UseFormRegister<any>;
}
export const ChechboxSectionContainer: React.FC<CheckboxSectionProps> = ({ register }) => {
  return (
    <CheckboxSectionPresentation register={register}/>
  )
}

