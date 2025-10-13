import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface Props {}

const HomePage = (props: Props) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen p-5">
        <div className="text-left max-w-[800px]">
          <h2 className="text-5xl mb-2">Hi, I'm</h2>
          <h1 className="text-5xl">GEOFFREY AMEBLE</h1>
          <hr className="border-2"></hr>
          <h2 className="text-3xl">Web Developer and Software Engineer</h2>
          <h2 className="text-xl mb-2" >Turning complex ideas into functional, scalable, and user-friendly software.</h2>
          <div className="flex flex-row gap-2 text-lg">
            <button className="bg-red-600 border-2 border-black rounded-lg text-white p-2">
              <Link to="/portfolio">
                <FontAwesomeIcon icon={faFileLines} />
                Portfolio
              </Link>
            </button>
            <button className="bg-red-600 border-2 border-black rounded-lg text-white p-2">
              <a
                href="https://github.com/Aceofthehood1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
                Github
              </a>
            </button>
            <button className="bg-red-600 border-2 border-black rounded-lg text-white p-2">
              <a
                href="https://www.linkedin.com/in/geoffrey-ameble/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFileLines} />
                LinkedIn
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
