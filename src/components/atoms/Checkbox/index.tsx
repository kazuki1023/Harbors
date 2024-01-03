import 'tailwindcss/tailwind.css'
import { UseFormRegister } from 'react-hook-form';

interface Props {
  id: number
  label: string;
  register: UseFormRegister<any>;
  color: string[];
}
const Checkbox = ({ id, label, register, color, ...props }: Props) => {
  const colors = color.join(' ');
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className={`text-xs font-medium mr-2 px-2.5 py-0.5 rounded md:text-xl lg:text-2xl xl:text-3xl ${colors}`} >{label}</span>
        <input type="checkbox" className="checkbox " id={`${id}`} name="plans[]" value={`${id}`} />
      </label>
    </div>
  )
}
export default Checkbox;

// https://tech.andpad.co.jp/entry/2022/12/22/100000
// これ参考にしたらreact-hook-formできそう
