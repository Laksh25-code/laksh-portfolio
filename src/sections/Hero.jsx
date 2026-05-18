import heroImage from "../assets/hero-image.png"
import grainTexture from "../assets/grain-texture.png"

import { motion } from "framer-motion"

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">

      {/* GRAIN TEXTURE */}
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-screen"
        style={{
          backgroundImage: `url(${grainTexture})`,
          backgroundSize: "cover",
        }}
      />

      {/* BACKGROUND TYPOGRAPHY */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="hidden lg:block absolute left-1/2 top-1/2 z-[5] -translate-x-1/2 -translate-y-1/2 font-['Bebas_Neue'] text-[320px] leading-none text-white/[0.06]"
      >
        PORTFOLIO
      </motion.h1>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 mx-auto flex h-full min-h-screen max-w-[1440px] flex-col items-center justify-center gap-10 px-6 py-12 md:flex-row md:justify-between md:px-16 md:py-16">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-2xl text-center md:text-left"
        >

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6 text-sm uppercase tracking-[8px] text-zinc-400"
          >
            hi i'm Frontend Developer
          </motion.p>

          {/* NAME */}
          <h1 className="font-['Bebas_Neue'] leading-none">

            <motion.span
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="block text-[80px] font-semibold text-white sm:text-[120px] md:text-[160px] lg:text-[190px]"
            >
              LAKSH
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="-mt-4 block text-[80px] font-semibold text-blue-500 sm:text-[120px] md:text-[160px] lg:text-[190px]"
            >
              PATIL
            </motion.span>

          </h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg md:mx-0"
          >
            I build modern websites with cinematic UI, smooth interactions,
            and creative frontend experiences.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-start"
          >

            {/* VIEW PROJECTS */}
            <a
              href="#projects"
              className="flex min-w-[200px] items-center justify-center rounded-full bg-blue-500 px-8 py-4 text-sm uppercase tracking-[4px] text-white transition duration-300 hover:scale-110 hover:bg-blue-400"
            >
              View Projects
            </a>

            {/* CONTACT */}
            <a
              href="#contact"
              className="flex min-w-[200px] items-center justify-center rounded-full border border-white px-8 py-4 text-sm uppercase tracking-[4px] text-white transition duration-300 hover:scale-110 hover:bg-white hover:text-black"
            >
              Contact Me
            </a>

          </motion.div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex w-full max-w-lg items-center justify-center"
        >

          {/* BLUE GLOW */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute h-[280px] w-[280px] rounded-full bg-blue-500 opacity-20 blur-3xl sm:h-[340px] sm:w-[340px] md:h-[420px] md:w-[420px]"
          />

          {/* OUTER SHADOW */}
          <div className="absolute h-[340px] w-[300px] rounded-[30px] bg-blue-500/10 blur-2xl sm:h-[420px] sm:w-[360px] md:h-[520px] md:w-[420px]"></div>

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
            className="relative w-full rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-md sm:p-6 md:p-8"
          >

            {/* TOP LABEL */}
            <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs uppercase tracking-[3px] text-zinc-300">
              Creative Developer
            </div>

            {/* IMAGE */}
            <motion.img
              whileHover={{
                scale: 1.03,
              }}
              src={heroImage}
              alt="Laksh"
              className="relative z-10 h-[280px] w-full max-w-full object-contain grayscale sm:h-[340px] md:h-[520px] lg:h-[580px]"
            />

          </motion.div>

        </motion.div>

      </div>

    </section>
  )
}

export default Hero