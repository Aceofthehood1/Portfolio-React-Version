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
            <details className="collapse bg-base-100 border-red-300 border">
              <summary className="collapse-title font-semibold">
                <span className=" text-xl text-red-600">Web Developer Intern</span>
                <div className="flex justify-between">
                  <span>SAP Investment Holdings</span>
                  <span>Feb-2024 - Present</span>
                </div>
              </summary>
              <div className="collapse-content text-sm pl-9">
                <ul className="list-disc">
                  <li>Enhanced user experience by detecting and resolving issues on the company's websites using <strong>Bubble.io</strong></li>
                  <li>Engineered a CSV import module using <strong>bubble.io workflows</strong> to automate customer data onboarding and user assignment via email mapping.</li>
                  <li>Designed and implemented a <strong>Bubble.io</strong> app to track organic product ingredients and automate stock-level monitoring.</li>
                  <li>Developed a <strong>Zoho Creator</strong> solution with <strong>Deluge scripting</strong> to handle subsidiary orders, transactions, and payments, integrating a dashboard for real-time insights and user role controls to restrict page access based on permissions.</li>
                </ul>
              </div>
            </details>
            <details className="collapse bg-base-100 border-red-300 border">
              <summary className="collapse-title font-semibold">
                <span className=" text-xl text-red-600">Freelance Developer</span>
                <div className="flex justify-between">
                  <span>Kato</span>
                  <span>March 2025 - July 2025</span>
                </div>
              </summary>
              <div className="collapse-content text-sm pl-9">
                <ul className="list-disc">
                  <li>Converted Figma designs into responsive HTML templates using <strong>Laravel</strong> and <strong>Tailwind CSS</strong>, enabling dynamic PDF creation populated with JSON data.</li>
                </ul>
              </div>
            </details>
            <details className="collapse bg-base-100 border-red-300 border">
              <summary className="collapse-title font-semibold">
                <span className=" text-xl text-red-600">Software Engineer Intern</span>
                <div className="flex justify-between">
                  <span>Turntabl</span>
                  <span>June 2022 - Aug 2022</span>
                </div>
              </summary>
              <div className="collapse-content text-sm pl-9">
                <ul className="list-disc">
                  <li>Built an interactive Pokémon library with <strong>Angular</strong> and <strong>REST APIs</strong>, featuring dynamic card layouts and on-click stat reveals.</li>
                  <li>Resolved front-end bugs and enhanced UI interactivity using Angular, adding unit tests for all user interactions.</li>
                </ul>
              </div>
            </details>
          </div>

          <div className="flex flex-col gap-2 max-w-[500px] p-4 sm:min-w-[600px]">
            <h1 className="text-5xl mb-4 text-red-600">
              <FontAwesomeIcon icon={faLaptopCode} />
              Projects
            </h1>
            <details className="collapse bg-base-100 border-red-300 border">
              <summary className="collapse-title font-semibold">
                <span className=" text-xl text-red-600">Multi-Restaurant Management and Booking System</span>
                <div className="flex justify-between">
                  <span>React, Typescript, Express, MongoDB, Tailwind Css, Node js</span>
                </div>
              </summary>
               <div className="collapse-content text-sm pl-9">
                <ul className="list-disc">
                  <li>Developed a restaurant management site that allows customer accounts and reservations to be made.</li>
                  <li>Authorized multiple restaurant accounts to be created, which gives them their own dedicated page to share what they offer.</li>
                  <li>Included CRUD operations for restaurants dishes, food categories and promotions</li>
                </ul>
              </div>
            </details>
            <details className="collapse bg-base-100 border-red-300 border">
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
            <details className="collapse bg-base-100 border-red-300 border">
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
