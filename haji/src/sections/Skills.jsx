import SkillBadge from '../components/SkillBadge';

const skills = [
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 80 },
  { name: 'TailwindCSS', level: 85 },
  { name: 'Firebase', level: 75 },
  { name: 'Bootstrap', level: 80 },
  { name: 'Git', level: 80 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="opacity-0 animate-fade-in [animation-delay:400ms]">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center dark:text-white">
            My <span className="text-blue-500">Skills</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <SkillBadge skill={skill} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;