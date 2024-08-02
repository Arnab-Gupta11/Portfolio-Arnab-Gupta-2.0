import { skills } from "../../data/skillsData";
import Container from "../../Layout/Container";
import Heading from "../shared/Heading";
import SkillsBox from "./SkillsBox";
import Marquee from "react-fast-marquee";
const Skills = () => {
  return (
    <Container>
      <Heading title={"Skills and Expertise"} desc={"Here are some of my skills on which I have been working on for the past 2 years."} />

      <div className="grid grid-cols-1 md:grid-cols-2 mt-14 mx-5 lg:mx-0 gap-5 font-bricolage">
        {skills.slice(0, 2).map((skill, index) => {
          return (
            <div key={index} className="card bg-transparent skill-card">
              <div className="p-5">
                <h2 className="text-2xl font-semibold text-[#dddddd] mb-3">{skill.title}</h2>
                <Marquee pauseOnHover={true}>
                  {skill.data.map((data, index) => (
                    <SkillsBox skill={data} key={index}></SkillsBox>
                  ))}
                </Marquee>
              </div>
            </div>
          );
        })}
        {skills.slice(2, 4).map((skill, index) => {
          return (
            <div key={index} className="card bg-transparent skill-card">
              <div className="p-5">
                <h2 className="text-2xl font-semibold text-[#dddddd] mb-3">{skill.title}</h2>
                <Marquee pauseOnHover={true} direction="right">
                  {skill.data.map((data, index) => (
                    <SkillsBox skill={data} key={index}></SkillsBox>
                  ))}
                </Marquee>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Skills;
