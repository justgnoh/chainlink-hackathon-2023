import React from 'react';
import Link from 'next/link';

function NavBar() {
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Placeholder logo */}
          <div className="flex-shrink-0">
            <Link className="text-white text-lg font-semibold" href="/">RevuShare</Link>
          </div>

          {/* Page links */}
          <div className="flex space-x-4">
            <Link  className="text-white hover:bg-gray-700 px-3 py-2 rounded-md" href="/">Home</Link>
            <Link className="text-white hover:bg-gray-700 px-3 py-2 rounded-md" href="/freelance">For Freelancers</Link>
            <Link className="text-white hover:bg-gray-700 px-3 py-2 rounded-md" href="/project-owner">For Project Owners</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar