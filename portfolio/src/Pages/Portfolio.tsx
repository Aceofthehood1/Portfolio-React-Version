import php from '../assets/php.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import angular from '../assets/angular.png'
import sass from '../assets/sass.png'
import tailwind from '../assets/tailwind.png'
import zoho from '../assets/zoho.png'
import java from '../assets/java.png'
import mongodb from '../assets/mongodb.png'
import sql from '../assets/sql.png'
import python from '../assets/python.png'
import bubble from '../assets/bubble.png'
import typescript from '../assets/typescript.png'
import { faBriefcase, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Portfolio = () => {
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
                  <li>Developed a <strong>Zoho Creator</strong> solution with <strong>Deluge scripting</strong> to handle subsidiary orders, product loading, invoices, payments and refunds integrating a dashboard for real-time insights and user role controls to restrict page access based on permissions.</li>
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
                  <li>Resolved front-end bugs and enhanced UI interactivity using <strong>Angular</strong>, adding <strong>unit tests</strong> for all user interactions.</li>
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
                <span className=" text-xl text-red-600">Multi-Restaurant Management System</span>
                <div className="flex justify-between">
                  <span>React, Typescript, Express, MongoDB, Tailwind Css, Node js</span>
                </div>
              </summary>
               <div className="collapse-content text-sm pl-9">
                <ul className="list-disc">
                  <li>Developed a restaurant management site that allows <strong>customer accounts</strong> and <strong>reservations</strong> to be made.</li>
                  <li>Authorized <strong>multiple</strong> restaurant accounts to be created, which gives them their own <strong>dedicated page</strong> to share what they offer.</li>
                  <li>Included <strong>CRUD</strong> operations for restaurants dishes, food categories and promotions</li>
                </ul>
              </div>
            </details>
            <details className="collapse bg-base-100 border-red-300 border">
              <summary className="collapse-title font-semibold">
                <span className=" text-xl text-red-600">Digital Game Store</span>
                <div className="flex justify-between">
                  <span>PHP, SASS, Javascript, SQL,</span>
                </div>
              </summary>
               <div className="collapse-content text-sm pl-9">
                <ul className="list-disc">
                  <li>Developed a dynamic web application for browsing, purchasing, and managing digital games.</li>
                  <li>Built a <strong>MySQL</strong>-backed user account system and search engine, and implemented <strong>session-managed</strong> shopping carts, improving user checkout flow and data organization.</li>
                </ul>
              </div>
            </details>
             <details className="collapse bg-base-100 border-red-300 border">
              <summary className="collapse-title font-semibold">
                <span className=" text-xl text-red-600">Vehicle Rental Management System</span>
                <div className="flex justify-between">
                  <span>Java</span>
                </div>
              </summary>
               <div className="collapse-content text-sm pl-9">
                <ul className="list-disc">
                  <li>Developed an <strong>MVC-based</strong> Vehicle Renting System in <strong>Java</strong> that manages Cars, Lorries, and Buses.</li>
                  <li>Implemented <strong>admin</strong> and <strong>customer</strong> functionalities for <strong>vehicle rental</strong>, <strong>account management</strong>, and <strong>vehicle tracking.</strong></li>
                  <li>Data was efficiently stored and retrieved from <strong>files</strong> to ensure persistent record management.</li>
                </ul>
              </div>
            </details>
            <details className="collapse bg-base-100 border-red-300 border">
              <summary className="collapse-title font-semibold">
                <span className=" text-xl text-red-600">UI Component Clipboard</span>
                <div className="flex justify-between">
                  <span>Java</span>
                </div>
              </summary>
               <div className="collapse-content text-sm pl-9">
                <ul className="list-disc">
                  <li>Built a comprehensive library of reusable <strong>TailwindCSS</strong> components including forms, navigation menus, and UI elements</li>
                  <li>Implemented <strong>copy-to-clipboard</strong> functionality allowing quick code snippet integration into projects</li>
                  <li>Created responsive, accessible components with customizable styling to speed up development workflow</li>
                </ul>
              </div>
            </details>
          </div>
        </div>
        
        <div className="flex flex-col align-center justify-center p-12">
          <h2 className="text-3xl text-center">Languages, Frameworks and Tools</h2>
          <hr className="border-2 text-red-600 mt-2 mb-2"></hr>
          <div className="grid grid-cols-3 lg:grid-cols-7 place-items-center gap-4">
            <img className="h-12 w-12 md:h-20 md:w-10 object-contain mx-auto" src={html} alt="HTML" />
            <img className="h-12 w-12 md:h-20 md:w-20 object-contain mx-auto" src={css} alt="CSS" />
            <img className="h-12 w-12 md:h-20 md:w-20 object-contain mx-auto" src={javascript} alt="JavaScript" />
            <img className="h-12 w-12 md:h-20 md:w-20 object-contain mx-auto" src={php} alt="PHP" />
            <img className="h-12 w-24 md:h-20 md:w-30 object-contain mx-auto" src={sass} alt="SASS" />
            <img className="h-12 w-12 md:h-20 md:w-20 object-contain mx-auto" src={tailwind} alt="Tailwind" />
            <img className="h-12 w-12 md:h-20 md:w-20 object-contain mx-auto" src={angular} alt="Angular" />
            <img className="h-12 w-12 md:h-20 md:w-15 object-contain mx-auto" src={react} alt="React" />
            <img className="h-12 w-24 md:h-20 md:w-30 object-contain mx-auto" src={java} alt="Java" />
            <img className="h-12 w-12 md:h-20 md:w-20 object-contain mx-auto" src={sql} alt="SQL" />
            <img className="h-12 w-12 md:h-20 md:w-20 object-contain mx-auto" src={mongodb} alt="MongoDB" />
            <img className="h-12 w-12 md:h-20 md:w-30 object-contain mx-auto" src={zoho} alt="Zoho" />
            <img className="h-12 w-12 md:h-20 md:w-15 object-contain mx-auto" src={typescript} alt="Typescript" />
            <img className="h-12 w-12 md:h-20 md:w-15 object-contain mx-auto" src={python} alt="Python" />
            <img className="h-12 w-12 md:h-20 md:w-25 object-contain mx-auto" src={bubble} alt="Bubble" />
          </div>
        </div>
        
      </section>
      
    </>
  );
};

export default Portfolio;
