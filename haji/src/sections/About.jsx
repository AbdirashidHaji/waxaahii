const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center opacity-0 animate-fade-in [animation-delay:200ms]">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 dark:text-white">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-blue-500 shadow-lg hover:scale-105 transition-transform duration-500">
                <img
                  src="pic.png"
                  alt="Abdirashid"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3 text-left">
              <p className="text-lg mb-4 dark:text-gray-300">
                I'm a passionate frontend developer with expertise in building responsive and user-friendly web applications.
              </p>
              <p className="text-lg mb-4 dark:text-gray-300">
                With a strong foundation in HTML, CSS, and JavaScript, I specialize in React.js and modern CSS frameworks like TailwindCSS.
              </p>
              <p className="text-lg dark:text-gray-300">
                I'm dedicated to creating clean, efficient code and exceptional user experiences that make an impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;