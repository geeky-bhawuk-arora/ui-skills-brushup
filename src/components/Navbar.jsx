import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-800 text-white px-5 py-3">
      <h2 className="text-2xl font-bold">Test</h2>
      <ul className="flex items-center gap-4">
        {['Home', 'About', 'Contact', 'Login'].map((item, index) => (
          <li key={index}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-xl hover:text-pink-400 transition-colors duration-200"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
