import React from "react";

export const ExperienceSection = () => {
  return (
    <section className="py-12 sm:py-20 px-4 bg-[#161B22]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-16 text-center">
          Experience
        </h2>
        <div className="space-y-8">
          {[
            {
              role: "Team Lead",
              company: "Camsol Innovations",
              dates: "Jan 2023 - Jan 2025",
              points: [
                "Led a small team specializing in Full-Stack Development",
                "Proficient in GraphQL and REST API design and implementation",
                "Developed engaging UIs using React, Vue.js, and Next.js",
                "Managed CI/CD pipelines using Jenkins and Git",
                "Used project management tools like Jira and GitHub Projects",
              ],
            },
            // {
            //   role: "Backend Developer",
            //   company: "REBIK MINES",
            //   dates: "Dec 2023 - May 2024",
            //   points: [
            //     "Developed REST API using NestJS",
            //     "Implemented PostgreSQL database functionality",
            //     "Collaborated with cross-functional teams",
            //   ],
            // },
            {
              role: "Software Developer",
              company: "Zinger Systems",
              dates: "Sept 2022 - April 2024",
              points: [
                "Front-end development using Vue.js and Quasar Framework",
                "Mobile development with Flutter",
                "Conducted extensive testing for quality assurance",
              ],
            },
            {
              role: "Full-Stack Developer",
              company: "CuisineEase",
              dates: "",
              points: [
                "Front-end development using React.js and Tailwind CSS",
                "Back-end development using Node.js and Nest.js",
                "Database management using PostgreSQL",
              ],
            },
            {
              role: "Full-Stack Developer",
              company: "Paysilo",
              dates: "",
              points: [
                "Front-end development using Next.js and Tailwind CSS",
                "Back-end development using Nest.js",
                "Database management using PostgreSQL",
              ],
            },
            // {
            //   role: "Web Developer",
            //   company: "HCTS",
            //   dates: "Oct 2021 - Mar 2023",
            //   points: [
            //     "Developed the HCTS (Harmony Choir Talent Show) Project",
            //     "Created widgets for deprecated browsers",
            //     "Hosted URL: https://harmonyhcts.herokuapp.com/",
            //   ],
            // },
          ].map((exp, idx) => (
            <div key={idx} className="bg-[#21262D] rounded-lg p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-lg sm:text-xl font-bold">
                  {exp.role}{" "}
                  <span className="font-normal text-blue-400">
                    @ {exp.company}
                  </span>
                </h3>
                <span className="text-gray-400 text-sm">{exp.dates}</span>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-1 pl-2">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
