import React from "react";

export const SkillsSection = () => {
  return (
    <section className="py-12 sm:py-20 px-4 bg-[#161B22]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-16 text-center">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {[
            {
              category: "Frontend",
              skills: [
                { name: "ReactJS", level: 95 },
                { name: "NextJS", level: 92 },
                { name: "VueJS", level: 90 },
                { name: "React Native", level: 88 },
                { name: "Tailwind CSS", level: 90 },
              ],
              icon: "🎨",
              color: "from-blue-500 to-blue-700",
            },
            {
              category: "Backend",
              skills: [
                { name: "NestJS", level: 90 },
                { name: "NodeJS", level: 92 },
                // { name: "Java", level: 80 },
                { name: "Spring Boot", level: 75 },
                { name: "GraphQL", level: 85 },
                // laravel
                { name: "Laravel", level: 80 },
              ],
              icon: "🛠️",
              color: "from-green-500 to-green-700",
            },
            {
              category: "Other",
              skills: [
                { name: "MongoDB", level: 85 },
                { name: "Postgres", level: 88 },
                { name: "MySQL", level: 80 },
                { name: "Docker", level: 85 },
                { name: "UI/UX & Figma", level: 80 },
              ],
              icon: "⚡",
              color: "from-purple-500 to-purple-700",
            },
            {
              category: "Soft Skills",
              skills: [
                { name: "Team Collaboration", level: 95 },
                { name: "Quality Assurance", level: 90 },
                { name: "Expert Listener", level: 92 },
                { name: "Fast Learner", level: 93 },
              ],
              icon: "🤝",
              color: "from-yellow-500 to-yellow-700",
            },
            // devops
            {
              category: "DevOps",
              skills: [
                { name: "CI/CD", level: 85 },
                { name: "GitHub Actions", level: 90 },
                { name: "Docker", level: 85 },
                { name: "Nginx", level: 80 },
              ],
              icon: "🚀",
              color: "from-red-500 to-red-700",
            },
          ].map((category) => (
            <div
              key={category.category}
              className="bg-[#21262D] rounded-lg p-6 transform hover:scale-[1.02] transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-[#30363D] rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} animate-expand origin-left`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
