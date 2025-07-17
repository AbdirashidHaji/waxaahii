import React from 'react'
import { useTheme } from '../context/useTheme';

const Services =() => {
    const { theme } = useTheme();
  const services = [
    {
      title: "Web Development",
      description: "Custom websites built with React, Vue, or other modern frameworks.",
      icon: "💻"
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that enhance user experience.",
      icon: "🎨"
    },
    {
      title: "Mobile Apps",
      description: "Cross-platform mobile applications for iOS and Android.",
      icon: "📱"
    },
    {
      title: "SEO Optimization",
      description: "Improve your search engine rankings and online visibility.",
      icon: "🔍"
    }
  ]

  return (
   <section 
      id="services" 
      className={`py-12 md:py-16 ${
        theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services