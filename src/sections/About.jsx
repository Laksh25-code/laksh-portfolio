import aboutImage from "../assets/about-image.png"
import grainTexture from "../assets/grain-texture.png"

import { motion } from "framer-motion"

function About() {

  const skills = [
    "React",
    "Tailwind",
    "UI/UX",
    "JavaScript",
    "Frontend",
    "Figma",
  ]

  return (
    <section
  id="about"
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

      {/* BACKGROUND TYPOGRAPHY */}
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute right-0 top-10 hidden font-['Bebas_Neue'] text-[300px] leading-none text-white/[0.04] md:block"
      >
        ABOUT
      </motion.h1>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 grid grid-cols-1 items-center gap-14 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >

          {/* BLUE GLOW */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="absolute h-[250px] w-[250px] rounded-full bg-blue-400/20 blur-3xl sm:h-[350px] sm:w-[350px] md:h-[450px] md:w-[450px]"
          />

          {/* OUTER SHADOW */}
          <div className="absolute h-[340px] w-[260px] rounded-[30px] bg-black/40 blur-2xl sm:h-[500px] sm:w-[360px] md:h-[620px] md:w-[450px]"></div>

          {/* GLASS FRAME */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            whileHover={{
              scale: 1.02,
            }}
            className="relative w-full max-w-[280px] rounded-[30px] border border-white/5 bg-black/30 p-4 shadow-2xl backdrop-blur-md sm:max-w-[380px] md:max-w-[450px]"
          >

            {/* TOP LABEL */}
            <div className="absolute left-4 top-4 rounded-full border border-white/5 bg-black/40 px-4 py-2 text-xs uppercase tracking-[3px] text-zinc-300">
              About Me
            </div>

            {/* IMAGE */}
            <motion.img
              whileHover={{
                scale: 1.03,
              }}
              src={aboutImage}
              alt="About"
              className="relative z-10 h-[320px] object-contain grayscale sm:h-[450px] md:h-[650px]"
            />

          </motion.div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-4 text-xs uppercase tracking-[5px] text-zinc-400 sm:text-sm sm:tracking-[8px]"
          >
            About Me
          </motion.p>

          {/* HEADING */}
          <h2 className="font-['Bebas_Neue'] leading-none text-white">

            <motion.span
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="block text-[70px] sm:text-[90px] md:text-[120px]"
            >
              Creative
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="block text-[70px] text-blue-400 sm:text-[90px] md:text-[120px]"
            >
              Developer
            </motion.span>

          </h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg lg:mx-0"
          >
            I'm Laksh Patil, a frontend developer and engineering student
            passionate about building modern web experiences with clean UI,
            smooth animations, and creative interactions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg lg:mx-0"
          >
            I enjoy creating visually engaging websites using React,
            Tailwind CSS, and modern frontend technologies while also
            exploring UI/UX design and interactive digital experiences.
          </motion.p>

          {/* SKILLS */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start"
          >

            {skills.map((skill, index) => (

              <motion.span
                key={index}
                whileHover={{
                  scale: 1.08,
                }}
                className="rounded-full border border-white/5 bg-black/30 px-4 py-2 text-[10px] uppercase tracking-[2px] text-white transition duration-300 hover:border-blue-400/40 hover:bg-blue-500/10 sm:px-6 sm:py-3 sm:text-sm sm:tracking-[3px]"
              >
                {skill}
              </motion.span>

            ))}

          </motion.div>

        </motion.div>

      </div>

    </section>
  )
}

export default About