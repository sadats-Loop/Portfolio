import {
  FaSquareFacebook,
  FaLinkedin,
  FaGithub,
  FaArrowUp,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const socials = [
  {
    Icon: FaSquareFacebook,
    label: "Facebook",
    href: "https://www.facebook.com/share/1bTsay4d6U/?mibextid=wwXIfr",
  },
  {
    Icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sadat-shafin/",
  },
  {
    Icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/sadats-Loop",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">

      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute -top-20 left-1/4 w-72 h-72 rounded-full bg-cyan-500/20 blur-[120px]" />

        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-emerald-500/20 blur-[120px]" />

      </div>

      {/* Grid */}

      <div className="absolute inset-0 opacity-[0.03]
      [background-image:linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)]
      [background-size:42px_42px]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto px-6 py-10 flex flex-col items-center text-center"
      >

        {/* Name */}

        <motion.h2
          variants={itemVariants}
          className="
          font-extrabold
          tracking-tight
          leading-none
          bg-gradient-to-r
          from-cyan-300
          via-emerald-400
          to-blue-500
          bg-clip-text
          text-transparent"
          style={{
            fontSize: "clamp(2.6rem,7vw,5rem)",
          }}
        >
          Sadat Shafin
        </motion.h2>

        {/* Subtitle */}

        <motion.p
          variants={itemVariants}
          className="mt-2 text-white/70 text-base"
        >
          Frontend Developer • React • UI Engineer
        </motion.p>

        {/* Badge */}

        <motion.div
          variants={itemVariants}
          className="mt-4 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />

          <span className="text-sm text-white/80">
            Available for Freelance
          </span>

        </motion.div>

        {/* Divider */}

        <motion.div
          variants={itemVariants}
          className="mt-5 h-[2px] w-32 rounded-full bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500"
        />

        {/* Quote */}

        <motion.p
          variants={itemVariants}
          className="mt-5 max-w-xl italic text-white/70 text-base"
        >
          "Building ideas into experiences, one line of code at a time."
        </motion.p>

        {/* Socials */}

        <motion.div
          variants={itemVariants}
          className="mt-6 flex items-center gap-4"
        >
          {socials.map(({ Icon, label, href }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -4,
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
              w-12
              h-12
              rounded-full
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              flex
              items-center
              justify-center
              text-xl
              text-gray-300
              hover:text-cyan-300
              hover:border-cyan-400/50
              transition-all
              duration-300"
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>
            {/* Navigation */}

        <motion.div
          variants={itemVariants}
          className="
          mt-6
          flex
          flex-wrap
          justify-center
          gap-5
          text-sm
          text-white/60
          "
        >
          {[
            ["Home", "#home"],
            ["About", "#about"],
            ["Skills", "#skills"],
            ["Projects", "#projects"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="transition-colors duration-300 hover:text-cyan-300"
            >
              {label}
            </a>
          ))}
        </motion.div>

        {/* Back To Top */}

        <motion.button
          variants={itemVariants}
          whileHover={{
            y: -3,
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="
          mt-6
          flex
          items-center
          gap-2
          rounded-full
          border
          border-white/10
          bg-white/5
          px-5
          py-2.5
          text-sm
          text-white/80
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-cyan-400/50
          hover:text-cyan-300
          "
        >
          <FaArrowUp />
          Back to Top
        </motion.button>

        {/* Divider */}

        <motion.div
          variants={itemVariants}
          className="
          mt-8
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-white/15
          to-transparent
          "
        />

        {/* Bottom */}

        <motion.div
          variants={itemVariants}
          className="
          mt-5
          w-full
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-3
          text-xs
          text-white/50
          "
        >
          <p>
            © {new Date().getFullYear()} Sadat Shafin. All rights reserved.
          </p>

          <p className="text-center">
            Built with React • Tailwind CSS • Framer Motion
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}