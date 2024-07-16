// eslint-disable-next-line react/prop-types
const SkillsBox = ({ skill }) => {
  // eslint-disable-next-line react/prop-types
  const { label, icon, progress } = skill;
  return (
    <div className="card relative w-40 p-2 h-32 shadow-md rounded-bl-md rounded-tr-md rounded-tl-badge rounded-br-badge border border-[#0E1018] ml-5 text-center">
      <div className="card-img h-24 w-full rounded-bl-md rounded-tr-md rounded-tl-badge rounded-br-badge transition-transform duration-300 ease bg-[#120D24]">
        <img className="w-8 h-8 mx-auto mt-4" src={icon} alt="" />
      </div>
      <div className="card-info">
        <p className="font-medium text-base text-[#f0f2f5b3] mt-1">{label}</p>
        <progress className="progress button-gradient  w-20" value={progress} max="100"></progress>
      </div>
    </div>
    // <div className="hover:shadow-[#00EEFF] hover:shadow-lg hover:text-[#00EEFF] px-5 py-4 text-center flex flex-col justify-center bg-[#1D1730] text-white shadow-lg hover:scale-125 hover:transition-all hover:duration-500 ">
    //   <div className="space-y-3">
    //     <img className="w-14 h-14 mx-auto" src={icon} alt="" />
    //     <h3 className="font-medium text-sm">{label}</h3>
    //     <progress className="progress progress-info w-20" value={progress} max="100"></progress>
    //   </div>
    // </div>
  );
};

export default SkillsBox;
