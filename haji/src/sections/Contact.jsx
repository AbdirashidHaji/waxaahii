import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="opacity-0 animate-fade-in [animation-delay:1000ms]">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center dark:text-white">
            Get In <span className="text-blue-500">Touch</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="opacity-0 animate-fade-in-left">
              <h3 className="text-xl font-semibold mb-4 dark:text-gray-300">Contact Information</h3>
              <p className="mb-6 dark:text-gray-400">
                Feel free to reach out to me for any questions or opportunities. I'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-4 mt-1 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 className="font-medium dark:text-gray-300">Email</h4>
                    <a href="mailto:abdirashid.ke@gmail.com" className="text-blue-500 hover:underline">abdirashid.ke@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-4 mt-1 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h4 className="font-medium dark:text-gray-300">Phone</h4>
                    <a href="tel:+254112135166" className="text-blue-500 hover:underline">+254 112 135 166</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="opacity-0 animate-fade-in-right">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;