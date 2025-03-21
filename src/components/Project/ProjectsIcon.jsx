/* eslint-disable react/prop-types */

const ProjectsIcon = ({ skills }) => {
  console.log("Skills====>", skills);
  return (
    <div className="flex -space-x-1.5">
      {skills?.slice(0, 8)?.map((item, index) => (
        <div key={index} className="relative">
          <img
            src={item?.icon}
            alt={`Avatar ${index}`}
            className="w-4 h-4 xsm:w-6 xsm-h-6 sm:w-8 sm:h-8 rounded-full border-[1px] border-secondary-400 dark:border-primary-400 p-1 bg-primary-200 flex-shrink-0"
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectsIcon;
