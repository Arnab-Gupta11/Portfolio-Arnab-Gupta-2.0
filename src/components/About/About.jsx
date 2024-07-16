import aboutQna from "../../data/aboutQna";
import Container from "../../Layout/Container";
import Heading from "../shared/Heading";

const About = () => {
  return (
    <Container>
      <Heading title={"About Me"} desc={""}></Heading>
      <div className="max-w-screen-sm mx-auto font-bricolage pt-5">
        <div className="collapse collapse-plus bg-gradient-to-br from-[#070215] to-[#120D24] accordian-card-shadow  mb-2 rounded-lg">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-lg font-medium text-[#f0f2f5]">Who I Am and What I’m Doing?</div>
          <div className="collapse-content">
            <p className="text-[#f0f2f5b3] text-base font-light text-justify">
              My name is <span className="text-[#f0f2f5] font-medium">Arnab Gupta</span>. I have completed my B.Sc. in Computer Science and
              Engineering from Noakhali Science and Technology University. I am a{" "}
              <span className="text-[#f0f2f5] font-medium">MERN stack developer.</span> Apart from developing, I also enjoy traveling to different
              places, which makes me feel better.
            </p>
          </div>
        </div>
        {aboutQna.slice(1, 5).map((data, index) => {
          return (
            <div key={index} className="collapse collapse-plus bg-gradient-to-br from-[#070215] to-[#120D24] accordian-card-shadow  mb-2 rounded-lg">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-lg font-medium text-[#f0f2f5]">{data.question}</div>
              <div className="collapse-content">
                <p className="text-[#f0f2f5b3] text-base font-light text-justify">{data.ans}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default About;

{
  /* <div className="space-y-4 mt-8 ">
  <p className="font-semibold text-[#cee1e1] text-center">
    My name is <span className="text-white">Arnab Gupta</span>. I have been studying web development since October 2022, and I&apos;ve made
    great progress in honing my skills since then. I like creating a cool design project.
  </p>
  <p className="font-semibold text-[#cee1e1] text-justify">
    I am a passionate frontend developer specializing in transforming imaginative concepts into immersive digital experiences. Proficient in
    HTML5, CSS3, and JavaScript, I excel in crafting visually stunning and user-friendly interfaces.
  </p>
  <p className="font-semibold text-[#cee1e1] text-center">
    Beyond the frontend, my skill set extends to the backend. With expertise in React.js, I build dynamic and responsive user interfaces that
    elevate web applications. Leveraging the power of Node.js and Express.js, I create scalable and efficient server-side solutions. My
    proficiency also spans databases, including MongoDB for flexible data storage, and I integrate Firebase for real-time functionalities,
    enhancing user interactions.
  </p>
  <p className="font-semibold text-[#cee1e1] text-center">
    Committed to staying ahead of design trends and emerging technologies, I blend aesthetic appeal with technical excellence.
  </p>
</div> */
}
