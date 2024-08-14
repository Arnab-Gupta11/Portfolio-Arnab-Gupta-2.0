// eslint-disable-next-line react/prop-types
const SkillsBox = ({ skill }) => {
  // eslint-disable-next-line react/prop-types
  const { label, icon, progress } = skill;
  return (
    <div className="card relative w-28 xs:w-32 md:w-40 p-2 h-32 shadow-md rounded-bl-md rounded-tr-md rounded-tl-badge rounded-br-badge border border-secondary-400 dark:border-[#0E1018] ml-5 text-center">
      <div className="card-img h-24 w-full rounded-bl-md rounded-tr-md rounded-tl-badge rounded-br-badge transition-transform duration-300 ease bg-secondary-300 dark:bg-primary-300">
        <img className="w-6 h-6 md:w-8 md:h-8 mx-auto mt-4" src={icon} alt="" />
      </div>
      <div className="card-info">
        <p className="font-medium text-xs xs:text-sm md:text-base text-primary-600 dark:text-secondary-100 mt-1">{label}</p>
        <progress className="progress w-10 xs:w-12 md:w-20 before:bg-[#26134d] " value={progress} max="100"></progress>
      </div>
    </div>
  );
};

export default SkillsBox;
