import React from 'react'
import { useTheme } from '../context/useTheme';

const Hero = () => {
  const { theme } = useTheme();
  return (
    <section 
      id="home" 
      className={`py-12 md:py-20 lg:py-32 ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-blue-500 text-white'
      }`}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Welcome to My Website</h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          This is a hero section created with TailwindCSS that works on all devices
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-500 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
            Get Started
          </button>
          <button className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-500 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero