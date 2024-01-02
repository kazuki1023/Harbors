import 'tailwindcss/tailwind.css';
const Footer = () => {
  return (
    <footer className="fixed h-20 bottom-0 w-screen bg-gray-800 text-white ">
      <div className="flex">
        <div className="border-r border-white h-20 w-1/2 flex flex-col items-center justify-center">
          <a href="" className="flex flex-col items-center justify-center">
            <i className="fas fa-home text-4xl"></i>
            <span className="text-xl footer-item">Home</span>
          </a>
        </div>
        <div className="border-l border-white h-20 w-1/2 flex flex-col items-center justify-center">
          <a href="" className="flex flex-col items-center justify-center">
            <i className="far fa-calendar-alt text-4xl"></i>
            <span className="text-xl footer-item">Calendar</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
export default Footer;
