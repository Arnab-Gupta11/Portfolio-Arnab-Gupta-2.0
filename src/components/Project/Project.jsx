import Container from "../../Layout/Container";
import { MdOutlineReadMore } from "react-icons/md";
import Heading from "../shared/Heading";
import { projectsData } from "../../data/projectsData";
import ProjectCard from "./ProjectCard";
import Button from "../shared/Button";
const Project = () => {
  return (
    <Container>
      <Heading title={"Projects"} desc={"I have worked on a wide range of projects. Here are some of best projects."} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        {projectsData.map((data) => (
          <ProjectCard key={data.id} data={data} />
        ))}
      </div>
      <div className="my-10 text-center">
        <Button>
          <div className="flex gap-2 items-center">
            See More
            <span className="transform transition-transform duration-500 group-hover:translate-x-1.5">
              <MdOutlineReadMore size={30} />
            </span>
          </div>
        </Button>
      </div>
    </Container>
  );
};

export default Project;
