import aboutQna from "../../data/aboutQna";
import Container from "../../Layout/Container";
import Heading from "../shared/Heading";

const About = () => {
  return (
    <Container>
      <Heading title={"About Me"} desc={""}></Heading>
      <div className="max-w-screen-sm mx-auto font-bricolage pt-5 mb-5">
        <div className="collapse collapse-plus bg-gradient-to-br from-[#070215] to-[#120D24] accordian-card-shadow  mb-2 rounded-lg">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-sm xsm:text-base md:text-lg font-medium text-[#f0f2f5]">Who I Am and What I’m Doing?</div>
          <div className="collapse-content">
            <p className="text-[#f0f2f5b3] text-[10px] xsm:text-xs md:text-base font-light text-justify">
              My name is <span className="text-[#f0f2f5] font-medium">Arnab Gupta</span>. I have completed my B.Sc. in Computer Science and Engineering from Noakhali Science and Technology University. I am a <span className="text-[#f0f2f5] font-medium">MERN stack developer.</span> Apart from developing, I also enjoy traveling to different places, which makes me feel better.
            </p>
          </div>
        </div>
        {aboutQna.slice(1, 5).map((data, index) => {
          return (
            <div key={index} className="collapse collapse-plus bg-gradient-to-br from-[#070215] to-[#120D24] accordian-card-shadow  mb-2 rounded-lg">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-sm xsm:text-base md:text-lg font-medium text-[#f0f2f5]">{data.question}</div>
              <div className="collapse-content">
                <p className="text-[#f0f2f5b3] text-[10px] xsm:text-xs md:text-base font-light text-justify">{data.ans}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default About;
