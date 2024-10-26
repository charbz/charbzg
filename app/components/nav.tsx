'use client'

import Link from 'next/link'
import { ThemeToggle } from './themeToggle'
import { Logo } from './logo'
import { useState } from 'react'

const navItems = {
  '/': {
    name: 'blog',
  },
  '/about': {
    name: 'about me',
  },
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-center justify-between relative px-0 pb-0 fade scroll-pr-6 md:relative"
          id="nav"
        >
          <Logo />
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div className={`md:flex flex-col md:flex-row md:space-x-4 md:items-center ${isMenuOpen ? 'flex' : 'hidden'} absolute md:relative right-0 top-full md:top-auto mt-2 md:mt-0 w-48 md:w-auto bg-white dark:bg-gray-800 md:bg-transparent md:dark:bg-transparent rounded-md shadow-lg md:shadow-none py-1 md:py-0`}>
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className="block md:inline-block px-4 py-2 md:p-0 text-sm md:text-base text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:hover:bg-transparent md:dark:hover:bg-transparent md:hover:text-neutral-800 md:dark:hover:text-neutral-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {name}
              </Link>
            ))}
            <div className="px-4 py-2 md:p-0">
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </div>
    </aside>
  )
}
