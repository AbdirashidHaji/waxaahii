const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-12 px-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <h3 className="text-xl font-bold dark:text-white">Abdirashid Haji</h3>
          <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Frontend Developer | Building digital experiences
          </p>
        </div>
        
        <div className={`pt-6 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            &copy; {new Date().getFullYear()} Abdirashid Haji. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;