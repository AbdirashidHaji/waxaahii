import React from 'react';
import Slider from 'react-slick';
import { useTheme } from '../context/useTheme';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const { theme } = useTheme();
  
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director, TechCorp",
      content: "This product completely transformed our workflow. The team's productivity increased by 200% and the interface is so intuitive.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 2,
      name: "Abdirashid Haji",
      role: "CEO, StartupHub",
      content: "Incredible customer support and the product just works. We've seen a 150% ROI in just 3 months of using this service.",
      avatar: "pic.png"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Product Manager, DesignCo",
      content: "The perfect solution we've been looking for. It integrated seamlessly with our existing tools and saved us countless hours.",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg"
    },
    {
      id: 4,
      name: "David Kim",
      role: "CTO, InnovateTech",
      content: "Reliable, scalable, and beautifully designed. Our engineering team loves working with this platform every day.",
      avatar: "https://randomuser.me/api/portraits/men/74.jpg"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };

  return (
    <section id="testimonials" className={`py-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          What Our Clients Say
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-4 outline-none">
                <div className={`p-8 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'}`}>
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                        {testimonial.name}
                      </h3>
                      <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className={`text-lg italic ${theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}>
                    "{testimonial.content}"
                  </p>
                  <div className="flex mt-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;





