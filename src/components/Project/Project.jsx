import Container from "../../Layout/Container";
import { MdOutlineReadMore } from "react-icons/md";
import Heading from "../shared/Heading";
import { projectsData } from "../../data/projectsData";
import ProjectCard from "./ProjectCard";
import Button from "../shared/Button";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <section >
      <Container id="projects">
        <Heading title={"Projects"} desc={"I have worked on a wide range of projects. Here are some of best projects."} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          {projectsData.map((data) => (
            <ProjectCard key={data.id} data={data} />
          ))}
        </div>
        <div className="my-10 text-center">
          <Link to={"/all-projects"}>
            <Button size={"auto"} icon={MdOutlineReadMore} iconAnimation={"transform transition-transform duration-500 group-hover:translate-x-1.5"}>See More</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Project;
