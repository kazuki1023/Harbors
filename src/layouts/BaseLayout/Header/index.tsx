import 'tailwindcss/tailwind.css';
import Image from "next/image";
import Link from 'next/link';
const Header = () => {
  return (
    <header className="relative">
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 bg-gray-800">
        <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl">
          <Link href="" className="flex items-center">
            <Image
              src='/harbors.svg'
              alt="harbors"
              width={60}
              height={60}
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </Link>
        </div>
        <div className="flex items-center lg:order-2 absolute top-4 right-5">
          <Link href="../assets/php/auth/sign_out.php" className="text-white hover:text-navy border border-transparent hover:border-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 font-cursive">Log out</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
