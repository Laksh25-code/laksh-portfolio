import grainTexture from "../assets/grain-texture.png"
import resumeFile from "../assets/resume/Laksh-Patil-Resume.pdf"

import { motion } from "framer-motion"

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#081120] px-16 py-32"
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
        className="absolute left-10 top-10 font-['Bebas_Neue'] text-[300px] leading-none text-white/[0.04]"
      >
        CONTACT
      </motion.h1>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 grid grid-cols-1 items-center gap-20 lg:grid-cols-2">

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
            Contact Me
          </motion.p>

          <h2 className="font-['Bebas_Neue'] text-[140px] leading-none text-white">

            <motion.span
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="block"
            >
              Let's
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="block text-blue-400"
            >
              Work
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              viewport={{ once: true }}
              className="block"
            >
              Together
            </motion.span>

          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-10 max-w-xl text-lg leading-relaxed text-zinc-400"
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
          className="relative"
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
            className="absolute left-10 top-10 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-3xl"
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
            className="relative rounded-[40px] border border-white/5 bg-black/30 p-10 shadow-2xl backdrop-blur-md"
          >

            {/* EMAIL */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-10"
            >

              <p className="mb-3 text-sm uppercase tracking-[6px] text-zinc-500">
                Email
              </p>

              <h3 className="font-['Bebas_Neue'] text-5xl text-white break-words">
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
                href="https://github.com/Laksh25-code?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-[20px] border border-white/5 bg-white/5 px-6 py-5 transition duration-300 hover:border-blue-500/30 hover:bg-blue-500/10"
              >

                <span className="font-['Bebas_Neue'] text-3xl text-white">
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
                className="group flex items-center justify-between rounded-[20px] border border-white/5 bg-white/5 px-6 py-5 transition duration-300 hover:border-blue-500/30 hover:bg-blue-500/10"
              >

                <span className="font-['Bebas_Neue'] text-3xl text-white">
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
              className="mt-10 flex w-full items-center justify-center rounded-full bg-blue-500 py-5 text-sm uppercase tracking-[4px] text-white transition duration-300 hover:bg-blue-400"
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