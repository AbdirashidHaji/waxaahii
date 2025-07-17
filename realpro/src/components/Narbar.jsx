import React, { useState } from 'react'
import { useTheme } from '../context/useTheme'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-4 fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Softnova</div>
        
        <div className="flex items-center gap-6">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <button onClick={() => scrollToSection('home')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('about')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                About
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('services')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Services
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Contact
              </button>
            </li>
          </ul>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={`Toggle ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 dark:bg-gray-800 px-4 pb-4">
          <ul className="flex flex-col space-y-3">
            <li>
              <button 
                onClick={() => scrollToSection('home')} 
                className="w-full text-left hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('about')} 
                className="w-full text-left hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('services')} 
                className="w-full text-left hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors"
              >
                Services
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="w-full text-left hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar