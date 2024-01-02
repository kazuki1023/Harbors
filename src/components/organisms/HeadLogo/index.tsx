import 'tailwindcss/tailwind.css'
import Image from 'next/image';
const HeaderLogo = () => {
  return (
    <div className="relative w-full h-screen" >
      <Image src="/harbors_top.jpg" alt="harbor" layout="fill"
        objectFit="contain" />
    </div>
  )
}
export default HeaderLogo;
