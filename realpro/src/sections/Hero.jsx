import React, { useState } from 'react';
import Slider from 'react-slick';
import { useTheme } from '../context/useTheme';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
  const { theme } = useTheme();
  const [activeForm, setActiveForm] = useState('signup'); // 'signup' or 'login'
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // Hero slides data
  const heroSlides = [
    {
      id: 1,
      title: "Welcome to Our Platform",
      subtitle: "Discover innovative solutions for your business needs",
      primaryBtn: "Get Started",
      secondaryBtn: "Sign Up Now",
      bgImage: theme === 'dark' 
        ? "linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.8))" 
        : "linear-gradient(rgba(59, 130, 246, 0.8), rgba(59, 130, 246, 0.8))",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643"
    },
    {
      id: 2,
      title: "Premium Quality Services",
      subtitle: "Experience excellence in every interaction",
      primaryBtn: "Our Services",
      secondaryBtn: "Join Now",
      bgImage: theme === 'dark' 
        ? "linear-gradient(rgba(31, 41, 55, 0.8), rgba(31, 41, 55, 0.8))" 
        : "linear-gradient(rgba(37, 99, 235, 0.8), rgba(37, 99, 235, 0.8))",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
    }
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    fade: true
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${activeForm === 'signup' ? 'Signup' : 'Login'} submitted:`, formData);
    setIsModalOpen(false);
    setFormData({
      name: '',
      email: '',
      password: ''
    });
  };

  const toggleForm = () => {
    setActiveForm(prev => prev === 'signup' ? 'login' : 'signup');
    setFormData({
      name: '',
      email: '',
      password: ''
    });
  };

  return (
    <>
      {/* Hero Carousel */}
      <section id="home" className="relative">
        <Slider {...settings}>
          {heroSlides.map((slide) => (
            <div key={slide.id} className="relative">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `${slide.bgImage}, url(${slide.image})`,
                  backgroundBlendMode: 'overlay'
                }}
              />
              
              <div className={`relative py-12 md:py-20 lg:py-32 min-h-[500px] flex items-center text-white`}>
                <div className="container mx-auto px-4 text-center">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white text-blue-500 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                      {slide.primaryBtn}
                    </button>
                    <button 
                      onClick={() => {
                        setActiveForm('signup');
                        setIsModalOpen(true);
                      }}
                      className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-500 transition"
                    >
                      {slide.secondaryBtn}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Auth Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`relative max-w-md w-full rounded-lg shadow-lg p-6 ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}>
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h2 className={`text-2xl font-bold mb-6 text-center ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`}>
              {activeForm === 'signup' ? 'Create Your Account' : 'Welcome Back'}
            </h2>
            
            {/* Form Tabs */}
            <div className="flex border-b mb-6">
              <button
                onClick={() => setActiveForm('signup')}
                className={`flex-1 py-2 font-medium ${
                  activeForm === 'signup' 
                    ? 'border-b-2 border-blue-500 text-blue-500' 
                    : theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}
              >
                Sign Up
              </button>
              <button
                onClick={() => setActiveForm('login')}
                className={`flex-1 py-2 font-medium ${
                  activeForm === 'login' 
                    ? 'border-b-2 border-blue-500 text-blue-500' 
                    : theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}
              >
                Log In
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {activeForm === 'signup' && (
                <div>
                  <label htmlFor="name" className={`block mb-1 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 rounded border ${
                      theme === 'dark' 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-800'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    required={activeForm === 'signup'}
                  />
                </div>
              )}
              
              <div>
                <label htmlFor="email" className={`block mb-1 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 rounded border ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-800'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="password" className={`block mb-1 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 rounded border ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-800'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  required
                  minLength="6"
                />
              </div>
              
              {activeForm === 'login' && (
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                    <label htmlFor="remember" className={`ml-2 block text-sm ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Remember me
                    </label>
                  </div>
                  <button
                    type="button"
                    className={`text-sm ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                    } hover:underline`}
                  >
                    Forgot password?
                  </button>
                </div>
              )}
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors"
              >
                {activeForm === 'signup' ? 'Sign Up' : 'Log In'}
              </button>
              
              <div className={`text-sm text-center ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {activeForm === 'signup' ? (
                  <>
                    Already have an account?{' '}
                    <button 
                      type="button" 
                      onClick={toggleForm}
                      className="text-blue-500 hover:underline"
                    >
                      Log in
                    </button>
                  </>
                ) : (
                  <>
                    Don't have an account?{' '}
                    <button 
                      type="button" 
                      onClick={toggleForm}
                      className="text-blue-500 hover:underline"
                    >
                      Sign up
                    </button>
                  </>
                )}
              </div>
              
              {/* Social Login */}
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className={`w-full border-t ${
                      theme === 'dark' ? 'border-gray-600' : 'border-gray-300'
                    }`}></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className={`px-2 ${
                      theme === 'dark' ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-500'
                    }`}>
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    className={`w-full inline-flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium ${
                      theme === 'dark' 
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                        : 'bg-white text-gray-500 hover:bg-gray-50'
                    } border ${
                      theme === 'dark' ? 'border-gray-600' : 'border-gray-300'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className={`w-full inline-flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium ${
                      theme === 'dark' 
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                        : 'bg-white text-gray-500 hover:bg-gray-50'
                    } border ${
                      theme === 'dark' ? 'border-gray-600' : 'border-gray-300'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;