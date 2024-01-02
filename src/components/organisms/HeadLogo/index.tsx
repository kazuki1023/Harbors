import 'tailwindcss/tailwind.css'
import Image from 'next/image';
const HeaderLogo = () => {
  return (
    <div className="relative w-full aspect-w-2 aspect-h-1" >
      <Image src="/harbors_top.jpg" alt="harbor" layout="fill"
        objectFit="contain" />
    </div>
  )
}
export default HeaderLogo;
