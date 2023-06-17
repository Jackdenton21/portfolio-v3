import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white shadow mt-0">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center sm:justify-between  h-16">  
        <div className="flex">
          <div className="flex-shrink-0 flex items-center">
            <Image
              src="/images/blacklogo.png"
              alt="Logo"
              width={40}
              height={40}
            />
          </div>
          <div className="-my-px ml-6 flex space-x-8">
              {/* Navigation links */}
              <a
                href="/"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-5 px-1 border-b-2 font-medium text-sm font-bold"
              >
                Home
              </a>
              <a
                href="/about"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-5 px-1 border-b-2 font-medium text-sm font-bold"
              >
                About
              </a>
              <a
                href="/contact"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-5 px-1 border-b-2 font-medium text-sm font-bold"
              >
                Contact
              </a>
              <a
                href="/projects"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-5 px-1 border-b-2 font-medium text-sm font-bold"
              >
                Projects
              </a>
              <a
                href="/experience"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-5 px-1 border-b-2 font-medium text-sm font-bold"
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
