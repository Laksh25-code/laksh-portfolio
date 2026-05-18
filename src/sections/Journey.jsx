import grainTexture from "../assets/grain-texture.png"

import { motion } from "framer-motion"

function Journey() {

  const skills = [
    "React",
    "Tailwind CSS",
    "JavaScript",
    "Frontend Development",
    "UI / UX Design",
    "Figma",
    "GitHub",
    "Web Development",
    "Responsive Design",
  ]

  const timeline = [
    {
      title: "Started Web Development",
      description:
        "Learned HTML, CSS, and JavaScript while building beginner frontend projects and landing pages.",
    },

    {
      title: "Explored React & UI/UX",
      description:
        "Started building modern React applications and designing creative user interfaces with cinematic aesthetics.",
    },

    {
      title: "Final Year Project Development",
      description:
        "Working on AI/ML-based healthcare solutions combined with modern web development technologies.",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-black px-16 py-32">

      {/* GRAIN TEXTURE */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-screen"
        style={{
          backgroundImage: `url(${grainTexture})`,
          backgroundSize: "cover",
        }}
      />

      {/* BACKGROUND TEXT */}
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute right-0 top-10 font-['Bebas_Neue'] text-[300px] leading-none text-white/[0.04]"
      >
        JOURNEY
      </motion.h1>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 grid grid-cols-1 gap-20 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-6 text-sm uppercase tracking-[8px] text-zinc-400"
          >
            Coding Journey
          </motion.p>

          <h2 className="font-['Bebas_Neue'] text-[130px] leading-none text-white">

            <motion.span
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="block"
            >
              Creative
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="block text-blue-500"
            >
              Developer
            </motion.span>

          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-10 max-w-xl text-lg leading-relaxed text-zinc-400"
          >
            My journey started with frontend development and gradually
            evolved into building cinematic interfaces, modern web
            experiences, and creative UI/UX projects.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-500"
          >
            I continuously explore new technologies, improve interaction
            design, and create projects that combine aesthetics with
            functionality.
          </motion.p>

        </motion.div>

        {/* RIGHT SIDE */}
        <div className="relative flex flex-wrap content-start gap-6">

          {/* BLUE GLOW */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="absolute left-20 top-20 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-3xl"
          />

          {skills.map((skill, index) => (

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
                y: -8,
                scale: 1.04,
              }}
              className="group relative overflow-hidden rounded-[30px] border border-white/5 bg-white/5 px-8 py-6 shadow-2xl backdrop-blur-md hover:border-blue-500/30"
            >

              {/* HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-blue-500/10"></div>
              </div>

              <h3 className="relative z-10 font-['Bebas_Neue'] text-4xl tracking-wide text-white">
                {skill}
              </h3>

            </motion.div>

          ))}

        </div>

      </div>

      {/* TIMELINE */}
      <div className="relative z-10 mt-40">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-6 text-sm uppercase tracking-[8px] text-zinc-400"
        >
          Growth Timeline
        </motion.p>

        <div className="space-y-14">

          {timeline.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="flex items-start gap-8"
            >

              {/* DOT */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  delay: index * 0.5,
                }}
                className="mt-2 h-4 w-4 rounded-full bg-blue-500"
              />

              {/* CONTENT */}
              <div>

                <h3 className="font-['Bebas_Neue'] text-5xl text-white">
                  {item.title}
                </h3>

                <p className="mt-2 max-w-2xl text-zinc-400">
                  {item.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Journey