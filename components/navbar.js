export default function Navbar() {
  return (
    <nav className="font-bold mt-1 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center sm:justify-between  h-16">
          <div className="flex">
            <div className="-my-px ml-6 font-bold flex space-x-4 sm:space-x-8">
              {/* Navigation links */}
              <a
                href="/"
                className="border-transparent text-slate-700 hover:text-gray-400 hover:border-gray-300 whitespace-nowrap py-5 px-1 border-b-2"
              >
                Home
              </a>
              <a
                href="/about"
                className="border-transparent text-slate-700 hover:text-gray-400 hover:border-gray-300 whitespace-nowrap py-5 px-1 border-b-2"
              >
                About
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
              <a
                href="/resume"
                className="border-transparent text-slate-700 hover:text-gray-400 hover:border-gray-300 whitespace-nowrap py-5 px-1 border-b-2"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
