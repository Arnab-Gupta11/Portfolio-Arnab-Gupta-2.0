/* eslint-disable react/prop-types */
import BtnGroup from "../shared/BtnGroup";
import "./project.css";
import { ImForward } from "react-icons/im";
const ProjectdDetails = ({ data }) => {
  return (
    <div className="p-5 ">
      <div className="flex justify-center">
        <div className="image-wrap w-[300px] h-[150px] md:w-[700px] md:h-[250px] lg:w-[1000px] lg:h-[300px] xl:w-[1000px] overflow-hidden xl:h-[400px]">
          <img src={data.mainPhoto} className="rounded-md" />
        </div>
      </div>

      <div className="mt-5 mb-10">
        <h1 className="text-base md:text-xl xl:text-3xl font-bold font-sora text-transparent bg-clip-text bg-title-gradient text-center">
          {data.title}
        </h1>
        <div className="divider mt-3">
          <BtnGroup />
        </div>
        <h3 className="font-bricolage text-base">
          <span className="text-secondary-200 font-semibold ">Type: </span> <span className="text-secondary-100 font-normal">{data.type}</span>{" "}
        </h3>
        <h3 className="font-bricolage text-base">
          <span className="text-secondary-200 font-semibold ">Technologoies: </span>{" "}
          <span className="text-secondary-100 font-normal">{data.technologoies}</span>{" "}
        </h3>
        <div className="space-y-1">
          <span className="text-secondary-200 font-semibold ">Features : </span>{" "}
          {data.features.map((feat, index) => {
            return (
              <div key={index} className="flex gap-2">
                <span className="text-secondary-200 font-semibold mt-1">
                  <ImForward />
                </span>
                <span className="text-secondary-100 font-normal">{feat}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectdDetails;
