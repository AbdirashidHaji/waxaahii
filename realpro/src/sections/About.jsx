import React from 'react'
import { useTheme } from '../context/useTheme';

const About = () => {
    const { theme } = useTheme();
  return (
    <section 
      id="about" 
      className={`py-12 md:py-16 ${
        theme === 'dark' ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800'
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">About Us</h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf" 
              alt="About our company" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">Our Story</h3>
            <p className="text-gray-600 mb-4">
              Founded in 2023, we're dedicated to creating amazing web experiences using modern technologies.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of passionate developers and designers work together to build solutions that make a difference.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-bold text-gray-800">50+</h4>
                <p className="text-gray-600 text-sm">Projects Completed</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-bold text-gray-800">10+</h4>
                <p className="text-gray-600 text-sm">Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About