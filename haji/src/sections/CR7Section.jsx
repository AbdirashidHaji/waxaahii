const CR7Section = () => {
  return (
    <section id="cr7" className="py-16 px-6 bg-white dark:bg-gray-800">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
            Why <span className="text-blue-600">CR7</span> is The GOAT of Football
          </h2>
          
          {/* CR7 Image */}
          <div className="relative w-full h-64 md:h-80 mb-8 rounded-xl overflow-hidden shadow-lg mx-auto max-w-2xl">
            <img
              src="cr7.jpg"
              alt="Cristiano Ronaldo celebrating"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Cristiano Ronaldo - The Ultimate Competitor
              </h3>
            </div>
          </div>
          
          {/* Description Text */}
          <div className="max-w-3xl mx-auto mb-12 text-left">
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">
              Cristiano Ronaldo stands as the greatest footballer of all time through his unmatched combination of skill, dedication, and longevity. His relentless pursuit of excellence mirrors the mindset I bring to coding.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              From his incredible goal-scoring record to his leadership on the biggest stages, CR7's career is a masterclass in consistency and adaptability - qualities essential in both football and frontend development.
            </p>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Ballon d'Or Card */}
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-3">
                <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <p className="text-3xl font-bold text-center dark:text-white">5</p>
              <p className="text-gray-600 dark:text-gray-300 text-center">Ballon d'Or Awards</p>
            </div>
            
            {/* Career Goals Card */}
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-3">
                <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <p className="text-3xl font-bold text-center dark:text-white">900+</p>
              <p className="text-gray-600 dark:text-gray-300 text-center">Career Goals</p>
            </div>
            
            {/* Champions League Card */}
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-3">
                <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-3xl font-bold text-center dark:text-white">5</p>
              <p className="text-gray-600 dark:text-gray-300 text-center">Champions League Titles</p>
            </div>
            
            {/* Years at Top Level Card */}
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-3">
                <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-3xl font-bold text-center dark:text-white">20+</p>
              <p className="text-gray-600 dark:text-gray-300 text-center">Years at Top Level</p>
            </div>
          </div>
          
          {/* Big CR7 Card */}
          <div className="bg-blue-600 text-white p-8 rounded-xl shadow-xl max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold mb-4">CR7</div>
              <div className="text-xl text-center">
                The Greatest of All Time
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CR7Section;