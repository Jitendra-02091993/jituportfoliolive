import React, { useState } from "react";
import html2pdf from "html2pdf.js";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Briefcase,
  GraduationCap,
  Mail,
  Code2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const Section: React.FC<{
  id: string;
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}> = ({ id, icon, title, children }) => {
  const [open, setOpen] = useState(true);

  return (
    <section id={id} className="mb-10">
      <div
        className="flex items-center justify-between cursor-pointer bg-indigo-100 dark:bg-indigo-800 p-3 rounded-md"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-2">
          {icon}
          <h2 className="text-xl font-semibold text-indigo-800 dark:text-white">
            {title}
          </h2>
        </div>
        {open ? <ChevronUp /> : <ChevronDown />}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-3"
          >
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-md p-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Resume: React.FC = () => {
  const handleDownloadPDF = () => {
    const element = document.getElementById("resume-content");
    const opt = {
      margin: 0.5,
      filename: "Jitendra_Vishwakarma_Resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    if (element) {
      html2pdf().set(opt).from(element).save();
    } else {
      console.error("Element with ID 'resume-content' not found.");
    }
  };

  return (
    <main
      id="resume-content" // ✅ Added this for PDF export to work
      className="min-h-screen font-sans text-gray-800 dark:text-white bg-gradient-to-br from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900"
    >
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">Jitendra V.</h1>
        <nav className="space-x-4 text-sm font-medium text-indigo-700 dark:text-indigo-300">
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#skills" className="hover:underline">
            Skills
          </a>
          <a href="#experience" className="hover:underline">
            Experience
          </a>
          <a href="#education" className="hover:underline">
            Education
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
          {/* <button
          onClick={handleDownloadPDF}
          className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition"
        >
          Download as PDF
        </button> */}
        </nav>
      </header>

      {/* Hero / Profile Section */}
      <section className="flex flex-col items-center justify-center text-center py-10 px-4">
        <img
          src={`${process.env.PUBLIC_URL}/profile.jpg`}
          alt="Jitendra Vishwakarma"
          className="w-36 h-36 rounded-full border-4 border-indigo-600 shadow-md mb-6"
        />
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-2">
          Jitendra Vishwakarma
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-1">
          Quality Engineer
        </p>
        <p className="text-sm text-gray-500 flex items-center gap-1">
          <span role="img" aria-label="location">
            📍
          </span>{" "}
          Mumbai, India
        </p>
      </section>

      {/* Sections */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-screen-lg mx-auto">
        <Section id="about" icon={<User />} title="Summary">
          <p className="text-md leading-relaxed text-gray-700 dark:text-gray-300">
            Innovative Quality Engineer with 5+ years of experience in
            developing and executing quality assurance strategies. Ability in
            utilizing cutting-edge testing tools to streamline processes and
            enhance product quality. Adept at collaborating with crossfunctional
            teams to achieve operational excellence and drive project success.
          </p>
        </Section>

        <Section id="skills" icon={<Code2 />} title="Skills">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 justify-items-center">
            {[
              "Playwright (TypeScript)",
              "WebDriver IO (TypeScript)",
              "Selenium WebDriver (Java)",
              "Karate DSL (API Automation)",
              "Rest Assured (API Automation)",
              "Postman (API Automation)",
              "Git, GitHub, Azure DevOps (VCS)",
              "Appium (Mobile App Testing)",
              "BDD Cucumber (Framework)",
              "Jenkins and Azure DevOps (CI/CD Tools)",
              "Maven and Gradle (Build Automation Tools)",
              "JIRA (Project Management Tool)",
              "MongoDB and MySQL (Database Testing)",
              "Appium (Mobile App Testing)",
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium w-64 text-center"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </Section>

        <Section id="experience" icon={<Briefcase />} title="Experience">
          <div className="mb-6">
            <p className="text-lg font-semibold text-indigo-700 dark:text-indigo-300">
              Publicis Sapient
            </p>
            <p className="text-md font-medium text-gray-800 dark:text-gray-100">
              Quality Engineer L2
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Nov 2022 – Present
            </p>
            <ul className="list-disc list-outside pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                Developed and implemented frontend automated test scripts using
                WebDriver IO, reducing manual testing time and enabling quicker
                identification of critical bugs.
              </li>
              <li>
                Built backend API test suites using Rest Assured, Karate DSL,
                and Postman to ensure accurate API response validation.
              </li>
              <li>
                Implemented automated regression testing for critical
                application features, cutting testing time by 60%.
              </li>
              <li>
                Designed MongoDB regression tests to verify code changes didn’t
                affect existing features.
              </li>
              <li>
                Mentored junior QA engineers on automation best practices and
                efficient workflows.
              </li>
              <li>
                Conducted performance testing with JMeter, analyzing system
                behavior under load.
              </li>
            </ul>
          </div>
          <div className="mb-7">
            <p className="text-lg font-semibold text-indigo-700 dark:text-indigo-300">
              Pacific IT Consulting Pvt Ltd
            </p>
            <p className="text-md font-medium text-gray-800 dark:text-gray-100">
              Software Quality Analyst
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Feb 2022 – Nov 2022
            </p>
            <ul className="list-disc list-outside pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                Developed automated tests using to validate Android and iOS
                applications.
              </li>
              <li>Developed test scripts in to test APIs.</li>
              <li>
                Coordinated with the development team to execute test cases
                effectively.
              </li>
              <li>
                Managed the execution of test cases for mobile applications,
                resulting in a reduction of app launch failures.
              </li>
              <li>
                Actively participated in Agile ceremonies, contributing to
                sprint planning and retrospectives that enhanced team
                efficiency.
              </li>
              <li>
                Engaged in client feedback sessions to address technical issues
                promptly and improve user satisfaction.
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <p className="text-lg font-semibold text-indigo-700 dark:text-indigo-300">
              Penta Software Consultancy Services
            </p>
            <p className="text-md font-medium text-gray-800 dark:text-gray-100">
              Software Quality Analyst
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Sep 2019 – Feb 2022
            </p>
            <ul className="list-disc list-outside pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                Developed and executed comprehensive test plans and test cases
                for software applications using and, ensuring thorough coverage
                of functional, integration, and regression testing
              </li>
              <li>
                Conducted API testing using, validating endpoints and ensuring
                data integrity across various services, which enhanced overall
                application reliability.
              </li>
              <li>
                Identified, documented, and tracked software defects using,
                collaborating with development teams to prioritize and resolve
                issues promptly.
              </li>
              <li>
                MFacilitated user acceptance testing sessions with stakeholders
                to validate that software met business requirements before
                production release.
              </li>
            </ul>
          </div>
        </Section>

        <Section id="projects" icon={<GraduationCap />} title="Projects">
          <div className="space-y-6">
            <div>
              <p className="text-md font-semibold text-indigo-700 dark:text-indigo-300">
                OSB (One Savings Bank)
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                A scalable and secure banking platform.
              </p>
              <ul className="list-disc list-outside pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                <li>
                  Developed a comprehensive banking solution for OneSavings Bank
                  (OSB) to enhance customer experience and streamline
                  operations.
                </li>
                <li>
                  Designed a unified platform combining savings accounts, loans,
                  and investment options for improved user convenience.
                </li>
                <li>
                  Implemented an integrated CRM system to deliver data-driven
                  insights across sales, service, and marketing.
                </li>
                <li>
                  Enhanced customer engagement and retention through targeted
                  strategies.
                </li>
              </ul>
            </div>

            <div>
              <p className="text-md font-semibold text-indigo-700 dark:text-indigo-300">
                RobinHood SuperApp
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                A multi-service SuperApp offering seamless access to tour
                booking, express delivery, and food ordering—all in one unified
                platform.
              </p>
              <ul className="list-disc list-outside pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                <li>
                  Delivered a comprehensive multi-service app for travel,
                  insurance, and activities.
                </li>
                <li>
                  Enabled users to book flights, accommodations, food, and
                  rental cars through a unified interface.
                </li>
                <li>
                  Designed with a user-friendly and visually engaging UI for
                  smooth navigation.
                </li>
                <li>
                  User requests (e.g., flight booking) are routed to a central
                  server.
                </li>
                <li>
                  The server communicates with multiple service provider
                  servers, orchestrated by 11infotech enabler.
                </li>
                <li>
                  All transactional and service data is processed through Data
                  Science pipelines for accuracy and insights.
                </li>
              </ul>
            </div>

            <div>
              <p className="text-md font-semibold text-indigo-700 dark:text-indigo-300">
                Net2phone Analytics
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                A powerful dashboard for tracking call metrics, user behavior,
                and performance trends across Net2Phone systems.
              </p>
              <ul className="list-disc list-outside pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                <li>
                  Increases customer satisfaction by streamlining billing and
                  support services.
                </li>
                <li>
                  Delivers value-added services to enhance the overall customer
                  experience.
                </li>
                <li>
                  Enhances multi-channel capabilities for faster, more effective
                  marketing execution.
                </li>
                <li>
                  Provides a substantial competitive edge in the market through
                  integrated service offerings.
                </li>
                <li>
                  Combines billing and CRM functions into a unified,
                  information-driven solution.
                </li>
                <li>
                  Supports sales, service, and marketing through real-time,
                  data-informed processes.
                </li>
                <li>
                  Built on an open, standards-based architecture for flexibility
                  and scalability.
                </li>
              </ul>
            </div>
            <div>
              <p className="text-md font-semibold text-indigo-700 dark:text-indigo-300">
                Asset Management System
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                A centralized platform for tracking, managing, and optimizing
                the lifecycle of physical and digital assets.
              </p>
              <ul className="list-disc list-outside pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                <li>
                  Provide advisory services to clients on complex balance sheet
                  issues and transformational business situations.
                </li>
                <li>
                  Analyze available financial structures within the regulatory
                  landscape.
                </li>
                <li>
                  Focus on both Corporate Finance and Financial Markets domains.
                </li>
                <li>
                  <ul>
                    <li>Mergers & Acquisitions (M&A)</li>
                    <li>Capital Markets Advisory services</li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>Equity Research</li>
                    <li>Bond and Equity Intermediation</li>
                  </ul>
                </li>
                <li>
                  Target audience includes investors, companies, and
                  entrepreneurs.
                </li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="education" icon={<GraduationCap />} title="Education">
          <div>
            <p className="font-medium">
              B.E in Mechanical Engineering - 61.98% GPA
            </p>
            <p className="text-sm text-gray-500">
              Mumbai University - May 2012 - April 2016
            </p>
          </div>
          <div>
            <p className="font-medium">HSC - 58.17%</p>
            <p className="text-sm text-gray-500">
              Maharashtra Board - June 2010 - May 2012
            </p>
          </div>
          <div>
            <p className="font-medium">SSC - 78.36%</p>
            <p className="text-sm text-gray-500">
              Maharashtra Board - March 2010
            </p>
          </div>
        </Section>

        <Section id="contact" icon={<Mail />} title="Contact">
          <p>
            Profile:{" "}
            <a
              href="https://jitendra-02091993.github.io/jituportfoliolive/"
              className="text-blue-600 underline"
            >
              ViewMyPortFolio
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:jitendrait291993@gmail.com"
              className="text-blue-600 underline"
            >
              jitendrait291993@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="phoneto:8169075328" className="text-blue-600 underline">
              8169075328
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/Jitendra-02091993"
              className="text-blue-600 underline"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Jitendra-02091993
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/jitendra-vishwakarma-90a917230/"
              className="text-blue-600 underline"
            >
              ViewMyLinkedInProfile
            </a>
          </p>
        </Section>
      </div>
    </main>
  );
};

export default Resume;
