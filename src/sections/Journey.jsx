import grainTexture from "../assets/grain-texture.png"

import {
  webProjects,
  uiuxProjects,
} from "../data/projects"

import { motion } from "framer-motion"

function Projects() {

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#081120] px-6 py-20 md:px-16 md:py-32"
    >

      {/* GRAIN TEXTURE */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-screen"
        style={{
          backgroundImage: `url(${grainTexture})`,
          backgroundSize: "cover",
        }}
      />

      {/* BLACK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-40"></div>

      {/* BACKGROUND TEXT */}
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute left-10 top-10 hidden font-['Bebas_Neue'] text-[300px] leading-none text-white/[0.04] md:block"
      >
        PROJECTS
      </motion.h1>

      <div className="relative z-10">

        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >

          <p className="mb-4 text-xs uppercase tracking-[5px] text-zinc-400 sm:text-sm sm:tracking-[8px]">
            Selected Works
          </p>

          <h2 className="font-['Bebas_Neue'] leading-none text-white text-[70px] sm:text-[90px] md:text-[140px]">

            Featured

            <span className="block text-[70px] text-blue-400 sm:text-[90px] md:text-[140px]">
              Projects
            </span>

          </h2>

        </motion.div>

        {/* WEB PROJECTS */}
        <div className="grid grid-cols-2 gap-4 md:gap-8 lg:grid-cols-2">

          {webProjects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
              }}
              className="group relative overflow-hidden rounded-[20px] border border-white/5 bg-black/30 p-3 shadow-2xl backdrop-blur-md md:rounded-[40px] md:p-6"
            >

              {/* BLUE GLOW */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
                className="absolute -right-10 -top-10 h-[250px] w-[250px] rounded-full bg-blue-500/20 blur-3xl"
              />

              {/* IMAGE */}
              <div className="overflow-hidden rounded-[20px] md:rounded-[30px]">

                <motion.img
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  src={project.image}
                  alt={project.title}
                  className="h-[140px] w-full object-cover md:h-[320px]"
                />

              </div>

              {/* CONTENT */}
              <div className="relative z-10 mt-4 md:mt-8">

                <h3 className="font-['Bebas_Neue'] text-xl leading-none text-white md:text-5xl">
                  {project.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-zinc-400 md:mt-4 md:text-base">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="mt-4 flex flex-wrap gap-2 md:mt-6 md:gap-3">

                  {project.tech.map((tech, i) => (

                    <motion.span
                      key={i}
                      whileHover={{
                        scale: 1.08,
                      }}
                      className="rounded-full border border-white/5 bg-black/40 px-2 py-1 text-[8px] uppercase tracking-[1px] text-white transition duration-300 hover:border-blue-400/40 hover:bg-blue-500/10 md:px-4 md:py-2 md:text-xs md:tracking-[3px]"
                    >
                      {tech}
                    </motion.span>

                  ))}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* UIUX SECTION */}
        <div className="relative mt-24 md:mt-40">

          {/* BLUE GLOW */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="absolute right-0 top-20 h-[250px] w-[250px] rounded-full bg-blue-500/20 blur-3xl md:h-[500px] md:w-[500px]"
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-4 text-xs uppercase tracking-[5px] text-zinc-400 sm:text-sm sm:tracking-[8px]"
          >
            UI / UX Designs
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="font-['Bebas_Neue'] leading-none text-white text-[70px] sm:text-[90px] md:text-[120px]"
          >

            Creative

            <span className="block text-[70px] text-blue-400 sm:text-[90px] md:text-[120px]">
              Interfaces
            </span>

          </motion.h2>

          {/* UIUX GRID */}
          <div className="relative z-10 mt-12 grid grid-cols-2 gap-4 md:mt-20 md:gap-6 lg:grid-cols-4">

            {uiuxProjects.map((image, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                className="group overflow-hidden rounded-[18px] border border-white/5 bg-black/30 shadow-2xl backdrop-blur-md md:rounded-[30px]"
              >

                <motion.img
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  src={image}
                  alt=""
                  className="h-[180px] w-full object-cover md:h-[320px]"
                />

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  )
}

export default Projects