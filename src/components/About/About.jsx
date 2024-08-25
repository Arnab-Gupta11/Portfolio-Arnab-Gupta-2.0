import aboutQna from "../../data/aboutQna";
import Container from "../../Layout/Container";
import { fadeInOut } from "../../lib/animation";
import Heading from "../shared/Heading";
import { motion } from "framer-motion"
const About = () => {
  return (
    <section >
      <Container id="about">
        <Heading title={"About Me"} desc={""}></Heading>

        <div className="max-w-screen-sm mx-auto font-bricolage pt-5 mb-5 pb-10">
          <motion.div
            variants={fadeInOut("left", 0, 20, "spring", 1)} // Content fades in from below
            initial="hidden"
            whileInView="visible"
            className="collapse collapse-plus bg-card-gradient-light dark:bg-card-gradient shadow-card-shadow-light dark:shadow-card-shadow  mb-2 rounded-lg">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-sm xsm:text-base md:text-lg font-semibold text-primary-500 dark:text-secondary-200">Who I Am and What I’m Doing?</div>
            <div className="collapse-content">
              <p className="text-primary-600 dark:text-secondary-100 text-[10px] xsm:text-xs md:text-base font-medium text-justify">
                My name is <span className="text-primary-500 dark:text-secondary-200 font-semibold">Arnab Gupta</span>. I have completed my B.Sc. in Computer Science and Engineering from Noakhali Science and Technology University. I am a <span className="text-primary-500 dark:text-secondary-200 font-semibold">MERN stack developer.</span> Apart from developing, I also enjoy traveling to different places, which makes me feel better.
              </p>
            </div>
          </motion.div>
          <motion.div

          >
            {aboutQna.slice(1, 5).map((data, index) => {
              const delay = (index + 2) * 0.2;
              return (
                <motion.div
                  variants={fadeInOut("left", delay, 20, "spring", 1)} // Content fades in from below
                  initial="hidden"
                  whileInView="visible"
                  key={index} className="collapse collapse-plus bg-card-gradient-light dark:bg-card-gradient shadow-card-shadow-light dark:shadow-card-shadow  mb-2 rounded-lg">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title text-sm xsm:text-base md:text-lg font-semibold text-primary-500 dark:text-secondary-200">{data.question}</div>
                  <div className="collapse-content">
                    <p className="text-primary-600 dark:text-secondary-100 text-[10px] xsm:text-xs md:text-base font-medium text-justify">{data.ans}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>

  );
};

export default About;
