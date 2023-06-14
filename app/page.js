import Navbar from '/components/navbar';


export default function Home() {

  return (


    <div className="bg-gray-100 min-h-screen">
      <Navbar/>
      
      <header className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900">Jack Denton</h1>
            <p className="mt-2 text-xl text-gray-500">Full-stack Software Engineer</p>
          </div>
        </div>
      </header>

    </div>
  );
}