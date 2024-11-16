import { useState } from 'react';
import { FaHome, FaIceCream, FaWarehouse, FaClipboardList, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex justify-between items-center">
        <button
          className="lg:hidden text-white"
          onClick={toggleMenu}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <ul className="hidden lg:flex justify-around mt-4">
        <li>
          <Link to="/" className="text-white flex items-center">
            <FaHome className="mr-2" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/seasonal-flavors" className="text-white flex items-center">
            <FaIceCream className="mr-2" />
            Seasonal Flavors
          </Link>
        </li>
        <li>
          <Link to="/ingredients" className="text-white flex items-center">
            <FaWarehouse className="mr-2" />
            Ingredients
          </Link>
        </li>
        <li>
          <Link to="/customer-suggestions" className="text-white flex items-center">
            <FaClipboardList className="mr-2" />
            Customer Suggestions
          </Link>
        </li>
      </ul>

      {/* Mobile */}
      <ul
        className={`lg:hidden flex flex-col items-center mt-4 space-y-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
      >
        <li>
          <Link to="/" className="text-white flex items-center">
            <FaHome className="mr-2" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/seasonal-flavors" className="text-white flex items-center">
            <FaIceCream className="mr-2" />
            Seasonal Flavors
          </Link>
        </li>
        <li>
          <Link to="/ingredients" className="text-white flex items-center">
            <FaWarehouse className="mr-2" />
            Ingredients
          </Link>
        </li>
        <li>
          <Link to="/customer-suggestions" className="text-white flex items-center">
            <FaClipboardList className="mr-2" />
            Customer Suggestions
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
