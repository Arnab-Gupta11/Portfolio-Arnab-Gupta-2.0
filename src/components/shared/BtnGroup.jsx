import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
const BtnGroup = () => {
  return (
    <div className="flex items-center justify-center gap-0">
      <button className="group flex items-center justify-start w-8 h-8 bg-transparent rounded-full cursor-pointer relative overflow-hidden transition-all duration-700 shadow-lg hover:w-[85px] hover:rounded-lg  active:translate-y-1 border-2 border-primary-100 mx-3 active:shadow-md active:shadow-primary-200">
        <div className="flex items-center justify-center w-full transition-all duration-1000 group-hover:justify-start group-hover:px-3 group-hover:scale-110 text-primary-100">
          <FiGithub fontWeight={300} />
        </div>
        <div className="absolute right-2 transform translate-x-full opacity-0 text-primary-100 text-base font-medium transition-all duration-1000 group-hover:translate-x-0 group-hover:opacity-100">
          Client
        </div>
      </button>
      <button className="group flex items-center justify-start w-8 h-8 bg-transparent rounded-full cursor-pointer relative overflow-hidden transition-all duration-700 shadow-lg hover:w-20 hover:rounded-lg  active:translate-y-1 border-2 border-primary-100 mx-3 active:shadow-md active:shadow-primary-200">
        <div className="flex items-center justify-center w-full transition-all duration-1000 group-hover:justify-start group-hover:px-3 group-hover:scale-110 text-primary-100">
          <HiOutlineExternalLink fontWeight={300} />
        </div>
        <div className="absolute right-3 transform translate-x-full opacity-0 text-primary-100 text-base font-medium transition-all duration-1000 group-hover:translate-x-0 group-hover:opacity-100">
          Live
        </div>
      </button>
      <button className="group flex items-center justify-start w-8 h-8 bg-transparent rounded-full cursor-pointer relative overflow-hidden transition-all duration-700 shadow-lg hover:w-24 hover:rounded-lg  active:translate-y-1 border-2 border-primary-100 mx-3 active:shadow-md active:shadow-primary-200 font-bricolage">
        <div className="flex items-center justify-center w-full transition-all duration-1000 group-hover:justify-start group-hover:px-3 group-hover:scale-110 text-primary-100">
          <FiGithub fontWeight={300} />
        </div>
        <div className="absolute right-2 transform translate-x-full opacity-0 text-primary-100 text-base font-medium transition-all duration-1000 group-hover:translate-x-0 group-hover:opacity-100">
          Server
        </div>
      </button>
    </div>
  );
};

export default BtnGroup;
