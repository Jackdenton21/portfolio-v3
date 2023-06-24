import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="font-bold mt-1 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center sm:justify-between  h-16">  
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
            <a href="/" className='border-transparent hover:text-gray-300 hover:border-gray-300 whitespace-nowrap py-5 px-1 border-b-2 text-sm font-bold'>
            <Image
                src="/images/tfg.png"
                alt="Logo"
                width={40}
                height={40}
              />
              </a>
            </div>
            <div className="-my-px ml-6 font-bold flex space-x-4 sm:space-x-8">
              {/* Navigation links */}
              <a
                href="/about"
                className="border-transparent text-slate-700 hover:text-gray-400 hover:border-gray-300 whitespace-nowrap py-5 px-1 border-b-2"
              >
                About
              </a>
              <a
                href="/contact"
                className="border-transparent text-slate-700 hover:text-gray-400 hover:border-gray-300 whitespace-nowrap py-5 px-1 border-b-2"
              >
                Contact
              </a>
              <a
                href="/projects"
                className="border-transparent text-slate-700 hover:text-gray-400 hover:border-gray-300 whitespace-nowrap py-5 px-1 border-b-2"
              >
                Projects
              </a>
              <a
                href="/experience"
                className="border-transparent text-slate-700 hover:text-gray-400 hover:border-gray-300 whitespace-nowrap py-5 px-1 border-b-2"
              >
                Experience
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
