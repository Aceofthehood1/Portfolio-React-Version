import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faBriefcase,
  faFileLines,
  faLaptopCode,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

import BackToTop from "../Components/BackToTop";
import {
  ExperienceCard,
  ProjectCard,
} from "../Components/PortfolioCards";
import SiteHeader from "../Components/SiteHeader";
import {
  experiences,
  profileLinks,
  projects,
  skills,
} from "../data/portfolioData";
import { useSectionObserver } from "../hooks/useSectionObserver";

const profileIcons = {
  github: faGithub,
  linkedin: faLinkedin,
};

const actionClasses =
  "inline-flex items-center gap-1 rounded-lg border-2 border-black bg-red-600 p-2 text-white";

const HomePage = () => {
  const [showName, setShowName] = useState(false);
  const { activeSection, showBackToTop } = useSectionObserver();

  useEffect(() => {
    // Wait until the first line finishes typing before showing the second.
    const timer = setTimeout(() => setShowName(true), 900);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const sectionId = window.location.hash.slice(1);
    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const animationFrame = window.requestAnimationFrame(() => {
      section.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
    });

    return () => window.cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <>
      <SiteHeader activeSection={activeSection} />

      <main>
        <section
          id="home"
          className="scroll-mt-20 flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-5"
          aria-labelledby="home-heading"
        >
          <div className="w-full max-w-[800px] text-left">
            <p className="mb-2 text-5xl">
              <Typewriter
                words={["Hi, I'm"]}
                loop={1}
                cursor={false}
                typeSpeed={100}
              />
            </p>
            <h1 id="home-heading" className="min-h-[1.2em] text-5xl">
              {showName && (
                <Typewriter
                  words={["Geoffrey Ameble"]}
                  loop={1}
                  cursor
                  typeSpeed={150}
                />
              )}
            </h1>
            <hr className="border-1 mt-2 mb-2 text-red-600" />
            <p className="text-3xl">Web Developer</p>
            <p className="mb-2 text-xl">
              Turning complex ideas into functional, scalable, and user-friendly
              applications.
            </p>
            <div className="flex flex-wrap gap-2 text-lg">
              <a className={actionClasses} href="#projects">
                <FontAwesomeIcon icon={faFileLines} />
                Portfolio
              </a>
              {profileLinks.map((link) => (
                <a
                  key={link.id}
                  className={actionClasses}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={profileIcons[link.id]} />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="scroll-mt-20 px-4 py-20"
          aria-labelledby="projects-heading"
        >
          <div className="mx-auto flex max-w-5xl flex-col gap-2">
            <h2 id="projects-heading" className="mb-4 text-5xl">
              <FontAwesomeIcon icon={faLaptopCode} />
              Featured Projects
            </h2>
            <hr className="border-1 mb-2 text-red-600" />
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section
          id="experience"
          className="scroll-mt-20 px-4 py-20"
          aria-labelledby="experience-heading"
        >
          <div className="mx-auto flex max-w-5xl flex-col gap-2">
            <h2 id="experience-heading" className="mb-4 text-5xl">
              <FontAwesomeIcon icon={faBriefcase} />
              Professional Experience
            </h2>
            <hr className="border-1 mb-2 text-red-600" />
            {experiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </section>

        <section
          id="skills"
          className="scroll-mt-20 px-4 py-20"
          aria-labelledby="skills-heading"
        >
          <div className="mx-auto max-w-6xl">
            <h2 id="skills-heading" className="text-center text-3xl">
              <FontAwesomeIcon icon={faScrewdriverWrench} />
              Languages, Frameworks and Tools
            </h2>
            <hr className="border-1 mt-2 mb-2 text-red-600" />
            <div className="grid grid-cols-3 place-items-center gap-4 lg:grid-cols-7">
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

        <section
          id="contact"
          className="scroll-mt-20 flex min-h-[50vh] items-center px-5 py-20"
          aria-labelledby="contact-heading"
        >
          <div className="mx-auto w-full max-w-5xl">
            <h2 id="contact-heading" className="text-5xl">
              Contact
            </h2>
            <hr className="border-1 mt-2 mb-4 text-red-600" />
            <p className="mb-4 text-xl">
              Connect with me on GitHub or LinkedIn.
            </p>
            <div className="flex flex-wrap gap-2 text-lg">
              {profileLinks.map((link) => (
                <a
                  key={link.id}
                  className={actionClasses}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={profileIcons[link.id]} />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <BackToTop isVisible={showBackToTop} />
    </>
  );
};

export default HomePage;
