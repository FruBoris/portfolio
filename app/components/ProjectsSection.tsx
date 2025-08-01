import React from "react";
import Image from "next/image";

export const ProjectsSection = () => {
  return (
    <section
      id="work"
      className="py-12 sm:py-20 px-4 bg-[#161B22] scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">
          Featured Projects
        </h2>
        <div className="space-y-8 sm:space-y-12">
          {[
            {
              title: "ValletPay",
              description: "Payment Gateway for seamless transactions.",
              techDetails: [
                "NextJs",
                "ReactJS",
                "NodeJs",
                "ExpressJs",
                "Docker",
                "GitHub Actions",
              ],
              image: "/valletpay.png",
              link: "https://valletpay.io/",
            },
            {
              title: "Gasvisor",
              description: "Gas station management system.",
              techDetails: [
                "NextJs",
                "Directus",
                "ExpressJs",
                "Docker",
                "GraphQl",
                "Hasura",
                "Firebase",
                "GitHub Actions",
                "Nginx",
              ],
              image: "/gasvisor.png",
              link: "https://staging.app.gasvisor.eu/",
            },
            {
              title: "Paysilo",
              description: "Payment gateway project.",
              techDetails: ["Next.js", "Tailwind CSS", "Nest.js", "PostgreSQL"],
              image: "/paysilo.png",
              link: "https://paysilo-frontend.vercel.app/auth/login",
            },
            {
              title: "CuisineEase",
              description: "Full-Stack food management platform.",
              techDetails: [
                "React.js",
                "Tailwind CSS",
                "Node.js",
                "Nest.js",
                "PostgreSQL",
              ],
              image: "/cuisineEase.png",
              link: "https://cuisine-ease-frontend.vercel.app",
            },

            // {
            //   title: "ZingerPay",
            //   description: "Payment Gateway for Zinger Systems.",
            //   techDetails: [
            //     "ReactNative",
            //     "Flutter",
            //     "NodeJs",
            //     "ExpressJs",
            //     "Docker",
            //   ],
            //   image: "/code.jpg",
            //   link: "#",
            // },
            {
              title: "Motowa",
              description: "Rides sharing mobile app.",
              techDetails: ["Flutter", "Firebase", "Google Maps API"],
              image: "/laptop.jpg",
              link: "#",
            },

            // {
            //   title: "HCTS",
            //   description: "Harmony Choir Talent Show web platform.",
            //   techDetails: ["Widgets for deprecated browsers"],
            //   image: "/code.jpg",
            //   link: "https://harmonyhcts.herokuapp.com/",
            // },
          ].map((project) => (
            <div
              key={project.title}
              className="bg-[#21262D] rounded-lg overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                  <h3 className="text-xl sm:text-2xl font-bold">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400">
                    {project.description}
                  </p>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">
                      Technical Implementation
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
                      {project.techDetails.map((detail) => (
                        <li key={detail} className="flex items-center gap-2">
                          <span className="text-green-400">▹</span>
                          <span className="text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-blue-400 hover:underline"
                    >
                      View Project
                    </a>
                  )}
                </div>
                <div className="relative h-full min-h-[300px] lg:min-h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#21262D] via-transparent to-transparent lg:via-[#21262D]/20 lg:to-[#21262D]/40"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
