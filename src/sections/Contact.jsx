import grainTexture from "../assets/grain-texture.png"
import resumeFile from "../assets/resume/Laksh_Patil_Resume.pdf"

import { motion } from "framer-motion"

function Contact() {
  return (
    <section
      id="contact"
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
        CONTACT
      </motion.h1>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 grid grid-cols-1 items-center gap-14 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
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
            Contact Me
          </motion.p>

          <h2 className="font-['Bebas_Neue'] leading-none text-white">

            <motion.span
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="block text-[70px] sm:text-[90px] md:text-[140px]"
            >
              Let's
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="block text-[70px] text-blue-400 sm:text-[90px] md:text-[140px]"
            >
              Work
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              viewport={{ once: true }}
              className="block text-[70px] sm:text-[90px] md:text-[140px]"
            >
              Together
            </motion.span>

          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg lg:mx-0"
          >
            I'm always interested in creative frontend projects,
            UI/UX collaborations, and modern web experiences.
          </motion.p>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
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
            className="absolute left-10 top-10 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-3xl"className="absolute left-0 top-0 h-[220px] w-[220px] rounded-full bg-blue-500/20 blur-3xl md:left-10 md:top-10 md:h-[500px] md:w-[500px]"
          />

          {/* GLASS CARD */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            whileHover={{
              scale: 1.01,
            }}
            className="relative w-full max-w-[340px] rounded-[25px] border border-white/5 bg-black/30 p-6 shadow-2xl backdrop-blur-md md:max-w-[600px] md:rounded-[40px] md:p-10"
          >

            {/* EMAIL */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-10"
            >

              <p className="mb-2 text-[10px] uppercase tracking-[4px] text-zinc-500 md:text-sm md:tracking-[6px]">
                Email
              </p>

              <h3 className="font-['Bebas_Neue'] text-2xl text-white break-all md:text-5xl">
                patillaksh2004@gmail.com
              </h3>

            </motion.div>

            {/* SOCIAL LINKS */}
            <div className="space-y-5">

              {/* GITHUB */}
              <motion.a
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{
                  x: 8,
                }}
                href="https://github.com/Laksh25-code"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-[16px] border border-white/5 bg-white/5 px-4 py-4 transition duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 md:rounded-[20px] md:px-6 md:py-5"
              >

                <span className="font-['Bebas_Neue'] text-xl text-white md:text-3xl">
                  GitHub
                </span>

                <span className="text-zinc-400 transition duration-300 group-hover:text-white">
                  →
                </span>

              </motion.a>

              {/* LINKEDIN */}
              <motion.a
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
                whileHover={{
                  x: 8,
                }}
                href="https://www.linkedin.com/in/laksh-patil-4b3136357"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-[16px] border border-white/5 bg-white/5 px-4 py-4 transition duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 md:rounded-[20px] md:px-6 md:py-5"
              >

                <span className="font-['Bebas_Neue'] text-xl text-white md:text-3xl">
                  LinkedIn
                </span>

                <span className="text-zinc-400 transition duration-300 group-hover:text-white">
                  →
                </span>

              </motion.a>

            </div>

            {/* DOWNLOAD RESUME BUTTON */}
            <motion.a
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
              href={resumeFile}
              download
              className="mt-8 flex w-full items-center justify-center rounded-full bg-blue-500 py-4 text-xs uppercase tracking-[3px] text-white transition duration-300 hover:bg-blue-400 md:mt-10 md:py-5 md:text-sm md:tracking-[4px]"
            >
              Download Resume
            </motion.a>

          </motion.div>

        </motion.div>

      </div>

    </section>
  )
}

export default Contact