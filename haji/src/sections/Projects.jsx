import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'E-commerce Website',
    description: 'A fully responsive e-commerce platform built with React and Firebase.',
    technologies: ['React', 'Firebase', 'TailwindCSS'],
    image: 'https://via.placeholder.com/600x400',
    link: '#',
  },
  {
    title: 'Task Management App',
    description: 'A productivity app for managing tasks with drag-and-drop functionality.',
    technologies: ['React', 'JavaScript', 'CSS'],
    image: 'https://via.placeholder.com/600x400',
    link: '#',
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather information with interactive charts and maps.',
    technologies: ['JavaScript', 'API', 'Bootstrap'],
    image: 'https://via.placeholder.com/600x400',
    link: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing my projects and skills.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://via.placeholder.com/600x400',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="opacity-0 animate-fade-in [animation-delay:600ms]">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center dark:text-white">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;