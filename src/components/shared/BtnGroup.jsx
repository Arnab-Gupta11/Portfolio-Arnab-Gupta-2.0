/* eslint-disable react/prop-types */
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
const BtnGroup = ({ data }) => {
  return (
    <div className="flex items-center justify-center gap-5">
      {data?.clientGithubLink && (
        <a
          href={data?.clientGithubLink}
          target="_blank"
          className="tooltip hover:tooltip-open tooltip-bottom before:bg-[#26134d] before:ml-1  before:text-xs before:text-[#f0f2f5b3] before:rounded-md before:font-medium group"
          data-tip="Client"
        >
          <FiGithub
            className="text-primary-600 dark:text-secondary-100 hover:scale-110 hover:text-primary-700 dark:hover:text-primary-100 cursor-pointer hover:-translate-y-2 transition-all duration-700"
            size={22}
          />
        </a>
      )}
      {data?.liveLink && (
        <a
          href={data?.liveLink}
          target="_blank"
          className="tooltip hover:tooltip-open tooltip-bottom before:bg-[#26134d] before:ml-1  before:text-xs before:text-[#f0f2f5b3] before:rounded-md before:font-medium group"
          data-tip="Live"
        >
          <HiOutlineExternalLink
            className="text-primary-600 dark:text-secondary-100 hover:scale-110 hover:text-primary-700 dark:hover:text-primary-100 cursor-pointer hover:-translate-y-2 transition-all duration-700"
            size={22}
          />
        </a>
      )}
      {data?.serverGithubLink && (
        <a
          href={data?.serverGithubLink}
          target="_blank"
          className="tooltip font-bricolage hover:tooltip-open tooltip-bottom before:bg-[#26134d] before:ml-1  before:text-xs before:text-[#f0f2f5b3] before:rounded-md before:font-medium group"
          data-tip="Server"
        >
          <FiGithub
            className="text-primary-600 dark:text-secondary-100 hover:scale-110 hover:text-primary-700 dark:hover:text-primary-100 cursor-pointer hover:-translate-y-2 transition-all duration-700"
            size={22}
          />
        </a>
      )}
    </div>
  );
};

export default BtnGroup;
