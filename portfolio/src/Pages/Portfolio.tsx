import { faBriefcase, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {}

const Portfolio = (props: Props) => {
  return (
    <>
      <section className=" h-screen pt-[100px]">
        <div className="flex flex-col gap-8 sm:flex-row justify-center">
          <div className=" flex flex-col gap-2 max-w-[500px] p-4 sm:min-w-[600px]">
            <h1 className="text-5xl mb-4 text-red-600">
              <FontAwesomeIcon icon={faBriefcase} />
              Experiences
            </h1>
            <details className="collapse bg-base-100 border-base-300 border">
              <summary className="collapse-title font-semibold">
                <span className=" text-xl text-red-600">Web Developer / Tech Analyst</span>
                <div className="flex justify-between">
                  <span>SAP Investment Holdings</span>
                  <span>Feb-2024 - Current</span>
                </div>
              </summary>
              <div className="collapse-content text-sm">
                Click the "Sign Up" button in the top right corner and follow
                the registration process.
              </div>
            </details>
            <details className="collapse bg-base-100 border-base-300 border">
              <summary className="collapse-title font-semibold">
                <span className=" text-xl text-red-600">Web Developer / Tech Analyst</span>
                <div className="flex justify-between">
                  <span>SAP Investment Holdings</span>
                  <span>Feb-2024 - Current</span>
                </div>
              </summary>
              <div className="collapse-content text-sm">
                Click the "Sign Up" button in the top right corner and follow
                the registration process.
              </div>
            </details>
            <details className="collapse bg-base-100 border-base-300 border">
              <summary className="collapse-title font-semibold">
                <span className=" text-xl text-red-600">Web Developer / Tech Analyst</span>
                <div className="flex justify-between">
                  <span>SAP Investment Holdings</span>
                  <span>Feb-2024 - Current</span>
                </div>
              </summary>
              <div className="collapse-content text-sm">
                Click the "Sign Up" button in the top right corner and follow
                the registration process.
              </div>
            </details>
          </div>

          <div className="flex flex-col gap-2 max-w-[500px] p-4 sm:min-w-[600px]">
            <h1 className="text-5xl mb-4 text-red-600">
              <FontAwesomeIcon icon={faLaptopCode} />
              Projects
            </h1>
            <details className="collapse bg-base-100 border-base-300 border">
              <summary className="collapse-title font-semibold">
                <span className=" text-xl text-red-600">Web Developer / Tech Analyst</span>
                <div className="flex justify-between">
                  <span>SAP Investment Holdings</span>
                  <span>Feb-2024 - Current</span>
                </div>
              </summary>
              <div className="collapse-content text-sm">
                Click the "Sign Up" button in the top right corner and follow
                the registration process.
              </div>
            </details>
            <details className="collapse bg-base-100 border-base-300 border">
              <summary className="collapse-title font-semibold">
                <span className=" text-xl text-red-600">Web Developer / Tech Analyst</span>
                <div className="flex justify-between">
                  <span>SAP Investment Holdings</span>
                  <span>Feb-2024 - Current</span>
                </div>
              </summary>
              <div className="collapse-content text-sm">
                Click the "Sign Up" button in the top right corner and follow
                the registration process.
              </div>
            </details>
            <details className="collapse bg-base-100 border-base-300 border">
              <summary className="collapse-title font-semibold">
                <span className=" text-xl text-red-600">Web Developer / Tech Analyst</span>
                <div className="flex justify-between">
                  <span>SAP Investment Holdings</span>
                  <span>Feb-2024 - Current</span>
                </div>
              </summary>
              <div className="collapse-content text-sm">
                Click the "Sign Up" button in the top right corner and follow
                the registration process.
              </div>
            </details>
          </div>

          
        </div>
      </section>
    </>
  );
};

export default Portfolio;
