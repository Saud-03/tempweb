import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="top-0 left-0 right-0 z-50 transition-colors duration-300" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-cursive text-cream">
            <Link to="/">Saud Hussain</Link>
          </div>
          <div className="md:hidden">
            <button onClick={handleMenuToggle} className="text-cream z-30">
              {isOpen ? <MdClose size={24} /> : <GiHamburgerMenu size={24} />}
            </button>
          </div>
          <nav className="hidden md:flex md:items-center md:space-x-8">
            <ul className="flex flex-row items-center space-x-8 text-cream text-lg font-semibold">
              <li>
                <Link to="/resume" className="hover:opacity-70 transition-opacity duration-300">
                  Resume
                </Link>
              </li>
              <li>
                <a href="#contact" className="hover:opacity-70 transition-opacity duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-90 text-cream transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
        style={{ zIndex: 40 }}
      >
        <nav className="flex flex-col items-center justify-center h-full">
          <ul className="space-y-6 text-center">
            <li>
              <Link
                to="/resume"
                className="text-2xl hover:opacity-70 transition-opacity duration-300"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </Link>
            </li>
            <li>
              <a
                href="#contact"
                className="text-2xl hover:opacity-70 transition-opacity duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
