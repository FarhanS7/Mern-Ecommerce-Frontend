import React from "react";
import logo from "../../assets/images/plainb-logo.svg";

const AppNavbar = () => {
  return (
    <>
      <div className="w-full bg-purple-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <a
                href="mailto:Support@PlanB.com"
                className="flex items-center text-sm hover:text-white-100 text-black"
              >
                <i className="bi bi-envelope me-2 "></i>
                Support@PlanB.com
              </a>
              <span className="flex items-center text-sm">
                <i className="bi bi-telephone me-2"></i>
                01774688159
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-purple-200">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="#" className="hover:text-purple-200">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="#" className="hover:text-purple-200">
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              <img src={logo} alt="Logo" className="h-8 w-auto" />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a
                href="/"
                className="text-gray-700 hover:text-purple-600 font-medium"
              >
                Home
              </a>
            </div>

            {/* Search and Actions */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search products..."
                  className="w-64 pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2">
                  <i className="bi bi-search text-gray-400"></i>
                </button>
              </div>

              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-purple-50 rounded-full relative group">
                  <i className="bi bi-bag text-gray-600 text-xl group-hover:text-purple-600"></i>
                </button>
                <button className="p-2 hover:bg-purple-50 rounded-full group">
                  <i className="bi bi-heart text-gray-600 text-xl group-hover:text-purple-600"></i>
                </button>
                <a
                  href="/profile"
                  className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <i className="bi bi-person me-2"></i>
                  Profile
                </a>
                <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  <i className="bi bi-box-arrow-right me-2"></i>
                  Logout
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-purple-50">
              <i className="bi bi-list text-2xl"></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AppNavbar;
