import React, { useState } from "react";
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
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Resume: React.FC = () => {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen font-sans">
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
        </nav>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Profile */}
        <div className="text-center mb-10" id="about">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="rounded-full w-28 h-28 mx-auto mb-4 border-4 border-indigo-500"
          />
          <h2 className="text-3xl font-bold text-indigo-600">
            Jitendra Vishwakarma
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Frontend Developer
          </p>
          <p className="text-sm mt-1 text-gray-500">📍 Bengaluru, India</p>
        </div>

        {/* Sections */}
        <Section id="about" icon={<User />} title="Summary">
          <p className="text-md leading-relaxed text-gray-700 dark:text-gray-300">
            Passionate Frontend Developer with 2+ years of experience building
            scalable, accessible web applications using React, TypeScript, and
            Tailwind CSS.
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
          <div>
            <p className="font-medium">Frontend Developer at ABC Corp</p>
            <p className="text-sm text-gray-500">Jan 2022 – Present</p>
            <ul className="list-disc list-inside mt-2 ml-2">
              <li>Built reusable components with React + TypeScript</li>
              <li>Improved performance and accessibility</li>
            </ul>
          </div>
        </Section>

        <Section id="education" icon={<GraduationCap />} title="Education">
          <div>
            <p className="font-medium">B.Tech in Computer Science</p>
            <p className="text-sm text-gray-500">XYZ University, 2018–2022</p>
          </div>
        </Section>

        <Section id="contact" icon={<Mail />} title="Contact">
          <p>
            Email:{" "}
            <a
              href="mailto:jitendra@example.com"
              className="text-blue-600 underline"
            >
              jitendra@example.com
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/jitendra"
              className="text-blue-600 underline"
              target="_blank"
              rel="noreferrer"
            >
              github.com/jitendra
            </a>
          </p>
        </Section>
      </div>
    </main>
  );
};

export default Resume;
