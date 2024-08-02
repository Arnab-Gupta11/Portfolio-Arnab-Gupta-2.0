const ProjectsIcon = ({ skills }) => {
  return (
    <div className="flex -space-x-1.5">
      {skills.map((avatar, index) => (
        <div key={index} className="relative">
          <img src={avatar} alt={`Avatar ${index}`} className="w-8 h-8 rounded-full border-[1px] border-primary-400 p-1 bg-primary-200" />
        </div>
      ))}
    </div>
  );
};

export default ProjectsIcon;
