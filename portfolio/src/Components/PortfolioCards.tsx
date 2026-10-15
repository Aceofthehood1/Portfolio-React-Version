import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type {
  DetailItem,
  Experience,
  Project,
} from "../data/portfolioData";

interface DetailListProps {
  details: readonly DetailItem[];
}

interface ExperienceCardProps {
  experience: Experience;
}

interface ProjectCardProps {
  project: Project;
}

const DetailList = ({ details }: DetailListProps) => (
  <div className="collapse-content text-sm pl-9">
    <ul className="list-disc">
      {details.map((detail) => (
        <li key={detail.id}>{detail.content}</li>
      ))}
    </ul>
  </div>
);

export const ExperienceCard = ({ experience }: ExperienceCardProps) => (
  <details className="collapse bg-base-100 border-red-300 border">
    <summary className="collapse-title font-semibold">
      <span className="text-xl text-red-600">{experience.role}</span>
      <div className="flex justify-between">
        <span>{experience.company}</span>
        <span>{experience.dates}</span>
      </div>
    </summary>
    <DetailList details={experience.details} />
  </details>
);

export const ProjectCard = ({ project }: ProjectCardProps) => (
  <details className="collapse bg-base-100 border-red-300 border">
    <summary className="collapse-title font-semibold">
      <span className="text-xl text-red-600">
        {project.title}{" "}
        {project.githubUrl && (
          <a
            className="text-black"
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        )}
      </span>
      <div className="flex justify-between">
        <span>{project.technologies}</span>
      </div>
    </summary>
    <DetailList details={project.details} />
  </details>
);
