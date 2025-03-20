import Container from "../../Layout/Container";
import Heading from "../shared/Heading";
import useGetSkills from "../../hooks/useGetSkills";
import Spinner from "../shared/Spinner";
import SkillsCard from "./SkillsCard";
import { motion } from "framer-motion";
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};
const Skills = () => {
  const [result, isLoading] = useGetSkills();
  const skills = result?.data;
  const frontend = skills?.filter((item) => item.category === "Frontend");
  const backend = skills?.filter((item) => item.category === "Backend");
  const language = skills?.filter((item) => item.category === "Languages");
  const tools = skills?.filter((item) => item.category === "Tools");

  return (
    <section>
      <Container>
        <Heading title={"Skills and Expertise"} desc={"Here are some of my skills on which I have been working on for the past 2 years."} />
        {isLoading && <Spinner />}

        {!isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 mt-14 mx-5 lg:mx-0 gap-5 font-bricolage pb-10">
            {[
              { name: "Frontend", data: frontend, direction: "left" },
              { name: "Backend", data: backend, direction: "left" },
              { name: "Languages", data: language, direction: "right" },
              { name: "Tools", data: tools, direction: "right" },
            ].map((item, index) => (
              <motion.div
                key={item.name}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the card is in view
                custom={index}
              >
                <SkillsCard name={item.name} data={item.data} direction={item.direction} />
              </motion.div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default Skills;
