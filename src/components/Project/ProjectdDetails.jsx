/* eslint-disable react/prop-types */
import useResponsiveIconSize from "../../hooks/useResponsiveIconSize";
import BtnGroup from "../shared/BtnGroup";
import "./project.css";
import { TbArrowBigRightLines } from "react-icons/tb";
const ProjectdDetails = ({ data }) => {
  const iconSize = useResponsiveIconSize()
  return (
    <div className="p-5 " >
      <div className="flex justify-center">
        <div className="image-wrap w-[300px] h-[150px] md:w-[700px] md:h-[250px] lg:w-[1000px] lg:h-[300px] xl:w-[1000px] overflow-hidden xl:h-[400px]">
          <img src={data.mainPhoto} className="rounded-md" />
        </div>
      </div>

      <div className="mt-5 mb-10">
        <h1 className="text-base sm:text-lg md:text-xl xl:text-3xl font-bold font-sora text-transparent bg-clip-text bg-title-gradient text-center">
          {data.title}
        </h1>
        <div className="divider mt-3.5 md:mt-5">
          <BtnGroup data={data} />
        </div>
        <h3 className="font-bricolage text-xs xsm:text-sm sm:text-base ">
          <span className="text-secondary-200 font-semibold ">Type: </span> <span className="text-secondary-100 font-normal">{data.type}</span>{" "}
        </h3>
        <h3 className="font-bricolage">
          <span className="text-secondary-200 font-semibold text-xs xsm:text-sm sm:text-base">Technologoies: </span>{" "}
          <span className="text-secondary-100 font-normal text-xs xsm:text-sm sm:text-base">{data.technologoies}</span>{" "}
        </h3>
        <div className="space-y-1.5">
          <span className="text-secondary-200 font-semibold text-xs xsm:text-sm sm:text-base">Features : </span>{" "}
          {data.features.map((feat, index) => {
            return (
              <div key={index} className="flex items-start gap-2">
                <span className="text-secondary-200 font-semibold">
                  <TbArrowBigRightLines size={iconSize} className="text-[#8750f7] mt-1" />
                </span>
                <span className="text-secondary-100 font-normal text-xs xsm:text-sm sm:text-base">{feat}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>

  );
};

export default ProjectdDetails;
