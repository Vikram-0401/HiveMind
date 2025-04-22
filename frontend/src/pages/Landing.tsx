import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with nav */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="font-serif text-2xl font-bold text-gray-900">HiveMind</div>
          <div className="flex space-x-4">
            <Link to="/signin" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
              Sign In
            </Link>
            <Link to="/signup" className="px-4 py-2 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl font-serif">
              <span className="block">Where good ideas</span>
              <span className="block text-gray-600">find you</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Discover stories, thinking, and expertise from writers on any topic.
            </p>
            <div className="mt-10 sm:mt-12">
              <Link to="/signup" className="px-8 py-3 text-base font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-colors sm:px-10">
                Start reading
              </Link>
            </div>
          </div>
        </div>

        {/* Featured content section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-xl font-semibold mb-2">Discover</div>
                <p className="text-gray-600">Find new ideas and perspectives on topics that matter to you.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-xl font-semibold mb-2">Share</div>
                <p className="text-gray-600">Write and share your knowledge, experiences, and stories.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-xl font-semibold mb-2">Connect</div>
                <p className="text-gray-600">Engage with a community of curious and insightful readers.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="border-t border-gray-200 pt-6 flex justify-between items-center">
            <div className="text-sm text-gray-500">© 2025 HiveMind. All rights reserved.</div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500">About</a>
              <a href="#" className="text-gray-400 hover:text-gray-500">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-gray-500">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}; 