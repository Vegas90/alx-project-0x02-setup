//A header with navigation links to /home and /about

import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <div className="text-lg font-bold">My App</div>
          <Link href="home" className="mr-4 hover:underline">Home</Link>
          <Link href="about" className="hover:underline">About</Link>
      </nav>
    </header>
  );
}

export default Header;
