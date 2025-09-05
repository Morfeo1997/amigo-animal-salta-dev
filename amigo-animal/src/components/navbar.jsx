import { Heart, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-violet-900 p-2 rounded-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">
              AdoptaMe
            </span>
          </div>

          {/* Login Button */}
          <button className="flex items-center space-x-2 bg-violet-900 hover:bg-violet-700 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
            <User className="h-4 w-4" />
            <span className="font-medium">Iniciar Sesión</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
