import { motion } from "framer-motion"

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed top-6 left-1/2 z-[999] -translate-x-1/2"
    >

      {/* NAV CONTAINER */}
      <div className="flex items-center gap-10 rounded-full border border-white/10 bg-white/[0.03] px-10 py-4 backdrop-blur-xl">

        {/* LOGO */}
        <a
          href="#"
          className="font-['Bebas_Neue'] text-3xl tracking-wide text-white"
        >
          LAKSH.
        </a>

        {/* LINKS */}
        <div className="hidden items-center gap-8 md:flex">

          <a
            href="#about"
            className="text-sm uppercase tracking-[3px] text-zinc-300 transition duration-300 hover:text-blue-400"
          >
            About
          </a>

          <a
            href="#projects"
            className="text-sm uppercase tracking-[3px] text-zinc-300 transition duration-300 hover:text-blue-400"
          >
            Projects
          </a>

          <a
            href="#journey"
            className="text-sm uppercase tracking-[3px] text-zinc-300 transition duration-300 hover:text-blue-400"
          >
            Journey
          </a>

          <a
            href="#contact"
            className="text-sm uppercase tracking-[3px] text-zinc-300 transition duration-300 hover:text-blue-400"
          >
            Contact
          </a>

        </div>

      </div>

    </motion.nav>
  )
}

export default Navbar