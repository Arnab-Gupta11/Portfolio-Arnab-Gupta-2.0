import { skills } from "../../data/skillsData";
import Container from "../../Layout/Container";
import Heading from "../shared/Heading";
import SkillsBox from "./SkillsBox";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { fadeInOut } from "../../lib/animation";
const Skills = () => {
  return (
    <section>
      <Container>
        <Heading title={"Skills and Expertise"} desc={"Here are some of my skills on which I have been working on for the past 2 years."} />
        <div className="grid grid-cols-1 md:grid-cols-2 mt-14 mx-5 lg:mx-0 gap-5 font-bricolage pb-10">
          {skills.slice(0, 2).map((skill, index) => {
            // const delay = (index + 1) * 0.2;
            return (
              <motion.div
                variants={fadeInOut("up", 0.2, 50, "spring", 0.5)} // Content fades in from below
                initial="hidden"
                whileInView="visible"
                key={index}
                className="card bg-transparent shadow-skill-card-shadow-light dark:shadow-skill-card-shadow"
              >
                <div className="p-5">
                  <h2 className="text-lg xs:text-xl md:text-2xl font-semibold text-primary-500 dark:text-secondary-200 mb-3">{skill.title}</h2>
                  <Marquee pauseOnHover={true}>
                    {skill.data.map((data, index) => (
                      <SkillsBox skill={data} key={index}></SkillsBox>
                    ))}
                  </Marquee>
                </div>
              </motion.div>
            );
          })}
          {skills.slice(2, 4).map((skill, index) => {
            // const delay = (index + 3) * 0.2;
            return (
              <motion.div
                variants={fadeInOut("up", 0.4, 50, "spring", 1)} // Content fades in from below
                initial="hidden"
                whileInView="visible"
                key={index}
                className="card bg-transparent shadow-skill-card-shadow-light dark:shadow-skill-card-shadow"
              >
                <div className="p-5">
                  <h2 className="text-lg xs:text-xl md:text-2xl font-semibold text-primary-500 dark:text-secondary-200 mb-3">{skill.title}</h2>
                  <Marquee pauseOnHover={true} direction="right">
                    {skill.data.map((data, index) => (
                      <SkillsBox skill={data} key={index}></SkillsBox>
                    ))}
                  </Marquee>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
