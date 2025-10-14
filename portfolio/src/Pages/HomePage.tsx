import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Typewriter } from "react-simple-typewriter";
import { useState, useEffect } from "react";


interface Props {}

const HomePage = (props: Props) => {
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    // Wait until the first line finishes typing before showing the second
    const timer = setTimeout(() => setShowName(true), 900); // adjust timing (ms)
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen p-5">
        <div className="text-left max-w-[800px]">
          <h2 className="text-5xl mb-2 "
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <Typewriter
              words={["Hi, I'm"]}
              loop={1}
              cursor={false}
              typeSpeed={100}
            />
          </h2>
          {showName && (
        <h1 className="text-5xl">
          <Typewriter
            words={["Geoffrey Ameble"]}
            loop={1}
            cursor={true}
            typeSpeed={150}
          />
        </h1>
      )}
          <hr className="border-2 text-red-600 mt-2 mb-2"></hr>
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
                <FontAwesomeIcon icon={faLinkedin} />
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
