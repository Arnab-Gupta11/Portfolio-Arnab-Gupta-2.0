import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
const BtnGroup = ({ data }) => {
  return (
    <div className="flex items-center justify-center gap-5">
      <a href={data.clientGithub} target="_blank" className="tooltip hover:tooltip-open tooltip-bottom before:bg-[#26134d] before:ml-1  before:text-xs before:text-[#f0f2f5b3] before:rounded-md before:font-medium group" data-tip="Client">
        <FiGithub className="text-secondary-100 hover:scale-110 hover:text-primary-100 cursor-pointer hover:-translate-y-2 transition-all duration-700" size={22} />
      </a>
      <a href={data.liveLink} target="_blank" className="tooltip hover:tooltip-open tooltip-bottom before:bg-[#26134d] before:ml-1  before:text-xs before:text-[#f0f2f5b3] before:rounded-md before:font-medium group" data-tip="Live">
        <HiOutlineExternalLink className="text-secondary-100 hover:scale-110 hover:text-primary-100 cursor-pointer hover:-translate-y-2 transition-all duration-700" size={22} />
      </a>
      <a href={data.serverGithub} target="_blank" className="tooltip font-bricolage hover:tooltip-open tooltip-bottom before:bg-[#26134d] before:ml-1  before:text-xs before:text-[#f0f2f5b3] before:rounded-md before:font-medium group" data-tip="Server">
        <FiGithub className="text-secondary-100 hover:scale-110 hover:text-primary-100 cursor-pointer hover:-translate-y-2 transition-all duration-700" size={22} />
      </a>
    </div>
  );
};

export default BtnGroup;
