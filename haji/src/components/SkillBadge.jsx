const SkillBadge = ({ skill }) => {
  return (
    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md dark:shadow-gray-800/50">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium dark:text-white">{skill.name}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
        <div 
          className="bg-blue-500 h-2 rounded-full" 
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBadge;