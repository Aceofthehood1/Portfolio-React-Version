import {
  faBriefcase,
  faLaptopCode,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  ExperienceCard,
  ProjectCard,
} from "../Components/PortfolioCards";
import { experiences, projects, skills } from "../data/portfolioData";

const Portfolio = () => {
  return (
    <section className="h-screen pt-[100px]">
      <div className="flex flex-col justify-center gap-8 lg:flex-row">
        <div className="flex w-full min-w-0 max-w-[600px] flex-col gap-2 p-4">
          <h1 className="text-5xl mb-4">
            <FontAwesomeIcon icon={faBriefcase} />Experience
          </h1>
          <hr className="border-1 text-red-600 mb-2" />
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>

        <div className="flex w-full min-w-0 max-w-[600px] flex-col gap-2 p-4">
          <h1 className="text-5xl mb-4">
            <FontAwesomeIcon icon={faLaptopCode} />
            Projects
          </h1>
          <hr className="border-1 text-red-600 mb-2" />
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <div className="flex flex-col align-center justify-center p-12">
        <h2 className="text-3xl text-center">
          <FontAwesomeIcon icon={faScrewdriverWrench} />Languages, Frameworks and
          Tools
        </h2>
        <hr className="border-1 text-red-600 mt-2 mb-2" />
        <div className="grid grid-cols-3 lg:grid-cols-7 place-items-center gap-4">
          {skills.map((skill) => (
            <img
              key={skill.name}
              className={skill.className}
              src={skill.imageSrc}
              alt={skill.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
