/* eslint-disable react/prop-types */
import Marquee from "react-fast-marquee";
import SkillsBox from "./SkillsBox";

const SkillsCard = ({ name, data, direction }) => {
  return (
    <div className="card bg-transparent shadow-skill-card-shadow-light dark:shadow-skill-card-shadow">
      <div className="p-5">
        <h2 className="text-lg xs:text-xl md:text-2xl font-semibold text-primary-500 dark:text-secondary-200 mb-3">{name}</h2>
        <Marquee pauseOnHover={true} direction={direction}>
          {data?.map((data, index) => (
            <SkillsBox skill={data} key={index}></SkillsBox>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default SkillsCard;
