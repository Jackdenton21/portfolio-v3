import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Image
                src="/images/blacklogo.png"
                alt="Logo"
                width={40}
                height={40}
              />
            </div>
            <div className="sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              {/* Navigation links */}
              <a
                href="/about"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
              >
                About
              </a>
              <a
                href="/contact"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
              >
                Contact
              </a>
              <a
                href="/projects"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
              >
                Projects
              </a>
              <a
                href="/experience"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
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
