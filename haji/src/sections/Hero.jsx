const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 dark:text-white">
            Hi, I'm <span className="text-blue-500 animate-pulse">Abdirashid</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 dark:text-gray-300">
            Frontend Developer
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 dark:text-gray-400">
            I build exceptional digital experiences with modern technologies like React, TailwindCSS, and Firebase.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-blue-500 text-blue-500 dark:text-blue-400 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300"
            >
              View Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;