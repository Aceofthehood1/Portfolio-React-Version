import type { ReactNode } from "react";

import angular from "../assets/angular.png";
import bubble from "../assets/bubble.png";
import css from "../assets/css.png";
import html from "../assets/html.png";
import java from "../assets/java.png";
import javascript from "../assets/javascript.png";
import mongodb from "../assets/mongodb.png";
import php from "../assets/php.png";
import python from "../assets/python.png";
import react from "../assets/react.png";
import sass from "../assets/sass.png";
import sql from "../assets/sql.png";
import tailwind from "../assets/tailwind.png";
import typescript from "../assets/typescript.png";
import zoho from "../assets/zoho.png";

export interface DetailItem {
  id: string;
  content: ReactNode;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  dates: string;
  details: readonly DetailItem[];
}

export interface Project {
  id: string;
  title: string;
  technologies: string;
  githubUrl?: string;
  details: readonly DetailItem[];
}

export interface Skill {
  name: string;
  imageSrc: string;
  className: string;
}

export const experiences: readonly Experience[] = [
  {
    id: "sap-investment-holdings",
    role: "Web Developer Intern",
    company: "SAP Investment Holdings",
    dates: "Feb-2024 - Present",
    details: [
      {
        id: "sap-websites",
        content: (
          <>
            Enhanced user experience by detecting and resolving issues on the
            company's websites using <strong>Bubble.io</strong>
          </>
        ),
      },
      {
        id: "sap-csv-import",
        content: (
          <>
            Engineered a CSV import module using <strong>bubble.io workflows</strong> to
            automate customer data onboarding and user assignment via email mapping.
          </>
        ),
      },
      {
        id: "sap-inventory",
        content: (
          <>
            Designed and implemented a <strong>Bubble.io</strong> app to track organic
            product ingredients and automate stock-level monitoring.
          </>
        ),
      },
      {
        id: "sap-zoho",
        content: (
          <>
            Developed a <strong>Zoho Creator</strong> solution with{" "}
            <strong>Deluge scripting</strong> to handle subsidiary orders, product
            loading, invoices, payments and refunds integrating a dashboard for
            real-time insights and user role controls to restrict page access based on
            permissions.
          </>
        ),
      },
    ],
  },
  {
    id: "kato",
    role: "Freelance Developer",
    company: "Kato",
    dates: "March 2025 - July 2025",
    details: [
      {
        id: "kato-templates",
        content: (
          <>
            Converted Figma designs into responsive HTML templates using{" "}
            <strong>Laravel</strong> and <strong>Tailwind CSS</strong>, enabling dynamic PDF
            creation populated with JSON data.
          </>
        ),
      },
    ],
  },
  {
    id: "turntabl",
    role: "Software Engineer Intern",
    company: "Turntabl",
    dates: "June 2022 - Aug 2022",
    details: [
      {
        id: "turntabl-pokemon",
        content: (
          <>
            Built an interactive Pokémon library with <strong>Angular</strong> and{" "}
            <strong>REST APIs</strong>, featuring dynamic card layouts and on-click stat
            reveals.
          </>
        ),
      },
      {
        id: "turntabl-testing",
        content: (
          <>
            Resolved front-end bugs and enhanced UI interactivity using{" "}
            <strong>Angular</strong>, adding <strong>unit tests</strong> for all user
            interactions.
          </>
        ),
      },
    ],
  },
];

export const projects: readonly Project[] = [
  {
    id: "multi-restaurant-management-system",
    title: "Multi-Restaurant Management System",
    technologies: "React, Typescript, Express, MongoDB, TailwindCSS, Node js",
    githubUrl: "https://github.com/Aceofthehood1/React-Restaurant-App",
    details: [
      {
        id: "restaurant-accounts",
        content: (
          <>
            Developed a restaurant management site that allows{" "}
            <strong>customer accounts</strong> and <strong>reservations</strong> to be made.
          </>
        ),
      },
      {
        id: "restaurant-pages",
        content: (
          <>
            Authorized <strong>multiple</strong> restaurant accounts to be created, which
            gives them their own <strong>dedicated page</strong> to share what they offer.
          </>
        ),
      },
      {
        id: "restaurant-crud",
        content: (
          <>
            Included <strong>CRUD</strong> operations for restaurants dishes, food
            categories and promotions
          </>
        ),
      },
    ],
  },
  {
    id: "digital-game-store",
    title: "Digital Game Store",
    technologies: "PHP, SASS, Javascript, SQL,",
    details: [
      {
        id: "game-store-browsing",
        content:
          "Developed a dynamic web application for browsing, purchasing, and managing digital games.",
      },
      {
        id: "game-store-accounts",
        content: (
          <>
            Built a <strong>MySQL</strong>-backed user account system and search engine,
            and implemented <strong>session-managed</strong> shopping carts, improving
            user checkout flow and data organization.
          </>
        ),
      },
    ],
  },
  {
    id: "vehicle-rental-management-system",
    title: "Vehicle Rental Management System",
    technologies: "Java",
    githubUrl: "https://github.com/Aceofthehood1/Vehicle-MVC-System",
    details: [
      {
        id: "vehicle-mvc",
        content: (
          <>
            Developed an <strong>MVC-based</strong> Vehicle Renting System in{" "}
            <strong>Java</strong> that manages Cars, Lorries, and Buses.
          </>
        ),
      },
      {
        id: "vehicle-functions",
        content: (
          <>
            Implemented <strong>admin</strong> and <strong>customer</strong> functionalities
            for <strong>vehicle rental</strong>, <strong>account management</strong>, and{" "}
            <strong>vehicle tracking.</strong>
          </>
        ),
      },
      {
        id: "vehicle-storage",
        content: (
          <>
            Data was efficiently stored and retrieved from <strong>files</strong> to ensure
            persistent record management.
          </>
        ),
      },
    ],
  },
  {
    id: "ui-component-clipboard",
    title: "UI Component Clipboard",
    technologies: "React, Typescript, TailwindCSS",
    githubUrl: "https://github.com/Aceofthehood1/Utility-Site",
    details: [
      {
        id: "clipboard-components",
        content: (
          <>
            Built a comprehensive library of reusable <strong>TailwindCSS</strong>{" "}
            components including forms, navigation menus, and UI elements
          </>
        ),
      },
      {
        id: "clipboard-copying",
        content: (
          <>
            Implemented <strong>copy-to-clipboard</strong> functionality allowing quick
            code snippet integration into projects
          </>
        ),
      },
      {
        id: "clipboard-accessibility",
        content:
          "Created responsive, accessible components with customizable styling to speed up development workflow",
      },
    ],
  },
];

export const skills: readonly Skill[] = [
  { name: "HTML", imageSrc: html, className: "h-12 w-12 md:h-20 md:w-10 object-contain mx-auto" },
  { name: "CSS", imageSrc: css, className: "h-12 w-12 md:h-20 md:w-20 object-contain mx-auto" },
  { name: "JavaScript", imageSrc: javascript, className: "h-12 w-12 md:h-20 md:w-20 object-contain mx-auto" },
  { name: "PHP", imageSrc: php, className: "h-12 w-12 md:h-20 md:w-20 object-contain mx-auto" },
  { name: "SASS", imageSrc: sass, className: "h-12 w-24 md:h-20 md:w-30 object-contain mx-auto" },
  { name: "Tailwind", imageSrc: tailwind, className: "h-12 w-12 md:h-20 md:w-20 object-contain mx-auto" },
  { name: "Angular", imageSrc: angular, className: "h-12 w-12 md:h-20 md:w-20 object-contain mx-auto" },
  { name: "React", imageSrc: react, className: "h-12 w-12 md:h-20 md:w-15 object-contain mx-auto" },
  { name: "Java", imageSrc: java, className: "h-12 w-24 md:h-20 md:w-30 object-contain mx-auto" },
  { name: "SQL", imageSrc: sql, className: "h-12 w-12 md:h-20 md:w-20 object-contain mx-auto" },
  { name: "MongoDB", imageSrc: mongodb, className: "h-12 w-12 md:h-20 md:w-20 object-contain mx-auto" },
  { name: "Zoho", imageSrc: zoho, className: "h-12 w-12 md:h-20 md:w-30 object-contain mx-auto" },
  { name: "Typescript", imageSrc: typescript, className: "h-12 w-12 md:h-20 md:w-15 object-contain mx-auto" },
  { name: "Python", imageSrc: python, className: "h-12 w-12 md:h-20 md:w-15 object-contain mx-auto" },
  { name: "Bubble", imageSrc: bubble, className: "h-12 w-12 md:h-20 md:w-25 object-contain mx-auto" },
];
