import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa6";

import ParticlesBackground from "../../components/ParticlesBackground";

export default function Home() {
  const socialClass = `
    group
    relative
    flex items-center justify-center

    w-12 h-12
    sm:w-14 sm:h-14
    lg:w-16 lg:h-16

    rounded-full

    bg-white/5
    backdrop-blur-xl

    border border-white/10

    text-white
    text-lg
    sm:text-xl
    lg:text-2xl

    transition-all
    duration-300

    hover:scale-110
    hover:-translate-y-1
    hover:border-cyan-400/60
    hover:bg-cyan-400/10
    hover:text-cyan-300
    hover:shadow-[0_0_35px_rgba(34,211,238,.55)]
  `;

  const roles = useMemo(
    () => [
      "Web Developer",
      "Full Stack Developer",
      "Software Engineer",
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];

    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) {
        setSubIndex((v) => v + 1);
      } else if (!deleting && subIndex === current.length) {
        setTimeout(() => setDeleting(true), 1200);
      } else if (deleting && subIndex > 0) {
        setSubIndex((v) => v - 1);
      } else {
        setDeleting(false);
        setIndex((p) => (p + 1) % roles.length);
      }
    }, deleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        bg-black
        overflow-hidden
        flex
        items-start
        lg:items-center
        pt-28
        sm:pt-32
        lg:pt-0
      "
    >
      {/* Particle Background */}
      <ParticlesBackground />

      {/* Background Glow */}
      <div className="absolute inset-0">
        {/* Top Left Glow */}
        <div
          className="
            absolute
            -top-32
            -left-32
            w-[500px]
            h-[500px]
            rounded-full
            bg-gradient-to-r
            from-[#302B63]
            via-[#00bf8f]
            to-[#1cd8d2]
            opacity-20
            blur-[180px]
            animate-pulse
          "
        />

        {/* Bottom Right Glow */}
        <div
          className="
            absolute
            -bottom-32
            -right-32
            w-[500px]
            h-[500px]
            rounded-full
            bg-gradient-to-r
            from-cyan-500
            via-blue-500
            to-purple-500
            opacity-20
            blur-[180px]
            animate-pulse
          "
        />
      </div>

      {/* Content */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-7xl
          mx-auto
          px-5
          sm:px-8
          lg:px-12
        "
      >
        <div
          className="
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-12
            lg:gap-8
          "
        >
          {/* LEFT CONTENT */}
          <div
            className="
              w-full
              max-w-3xl
              mx-auto
              lg:mx-0
              text-center
              lg:text-left
            "
          >
            {/* Typing Text */}
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="
                text-xl
                sm:text-2xl
                md:text-3xl
                lg:text-4xl
                xl:text-5xl
                font-bold
                text-white
                mb-4
                sm:mb-6
                min-h-[1.5em]
                break-words
                leading-tight
              "
            >
              {roles[index].substring(0, subIndex)}
              <span className="animate-pulse">|</span>
            </motion.h2>

            {/* Hello */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                xl:text-8xl
                font-extrabold
                leading-tight
                sm:leading-tight
                lg:leading-none
                break-words
                bg-gradient-to-r
                from-cyan-300
                via-cyan-400
                to-emerald-400
                bg-clip-text
                text-transparent
              "
            >
              Hello, I'm
            </motion.h1>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="
                mt-2
                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
                xl:text-[6rem]
                2xl:text-[7rem]
                font-black
                text-white
                leading-[1.05]
                tracking-tight
                break-words
              "
            >
              Sadat{" "}
              <span className="block sm:inline">
                Shafin
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="
                mt-6
                sm:mt-8
                text-sm
                sm:text-base
                md:text-lg
                lg:text-xl
                text-gray-300
                max-w-full
                sm:max-w-lg
                lg:max-w-xl
                leading-7
                sm:leading-8
                lg:leading-9
                text-center
                lg:text-left
                mx-auto
                lg:mx-0
                px-1
                sm:px-0
              "
            >
              I turn complex ideas into seamless, high-impact web
              experiences — building modern, scalable, lightning-fast
              applications that make a difference.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="
                flex
                flex-wrap
                items-center
                justify-center
                lg:justify-start
                gap-5
                mt-10
              "
            >
              {/* View My Work */}
              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{ scale: 0.95 }}
                className="
                  relative
                  overflow-hidden
                  px-5
                  py-3
                  sm:px-7
                  sm:py-3.5
                  lg:px-8
                  lg:py-4
                  rounded-full
                  text-sm
                  sm:text-base
                  lg:text-lg
                  font-semibold
                  tracking-wide
                  text-white
                  bg-gradient-to-r
                  from-cyan-400
                  via-blue-500
                  to-purple-500
                  shadow-[0_0_35px_rgba(34,211,238,.45)]
                  hover:shadow-[0_0_60px_rgba(34,211,238,.7)]
                  transition-all
                  duration-500
                  whitespace-nowrap
                "
              >
                <span className="relative z-10">
                  View My Work
                </span>

                {/* Shine Effect */}
                <span
                  className="
                    absolute
                    inset-0
                    bg-linear-to-r
                    from-transparent
                    via-white/30
                    to-transparent
                    -translate-x-full
                    hover:translate-x-full
                    transition-transform
                    duration-1000
                  "
                />
              </motion.a>

              {/* Resume Button */}
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{ scale: 0.95 }}
                className="
                  relative
                  overflow-hidden
                  px-5
                  py-3
                  sm:px-7
                  sm:py-3.5
                  lg:px-8
                  lg:py-4
                  rounded-full
                  text-sm
                  sm:text-base
                  lg:text-lg
                  font-semibold
                  tracking-wide
                  text-white
                  bg-white/10
                  backdrop-blur-xl
                  border
                  border-white/20
                  shadow-[0_0_30px_rgba(255,255,255,.12)]
                  hover:shadow-[0_0_45px_rgba(255,255,255,.3)]
                  transition-all
                  duration-500
                  hover:bg-white
                  hover:text-black
                  whitespace-nowrap
                "
              >
                <span className="relative z-10">
                  My Resume
                </span>

                {/* Shine Effect */}
                <span
                  className="
                    absolute
                    inset-0
                    bg-linear-to-r
                    from-transparent
                    via-white/25
                    to-transparent
                    -translate-x-full
                    hover:translate-x-full
                    transition-transform
                    duration-1000
                  "
                />
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="
                flex
                justify-center
                lg:justify-start
                items-center
                gap-4
                sm:gap-5
                mt-8
                sm:mt-10
                flex-wrap
              "
            >
              {/* Facebook */}
              <motion.a
                href="https://www.facebook.com/share/1bTsay4d6U/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className={socialClass}
              >
                <FaFacebookF />
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/sadat-shafin/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                className={socialClass}
              >
                <FaLinkedinIn />
              </motion.a>

              {/* GitHub */}
              <motion.a
                href="https://github.com/sadats-Loop"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className={socialClass}
              >
                <FaGithub />
              </motion.a>
            </motion.div>
          </div>

          {/* RIGHT / AVATAR */}
          <div
            className="
              relative
              flex
              items-center
              justify-center
              mt-16
              lg:mt-0
              shrink-0
            "
          >
            {/* Outer Glow */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.45, 0.7, 0.45],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                w-[260px]
                h-[260px]
                sm:w-[330px]
                sm:h-[330px]
                lg:w-[500px]
                lg:h-[500px]
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                via-blue-500
                to-purple-600
                blur-[110px]
                opacity-60
              "
            />

            {/* Middle Glow */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                w-[240px]
                h-[240px]
                sm:w-[310px]
                sm:h-[310px]
                lg:w-[470px]
                lg:h-[470px]
                rounded-full
                border
                border-cyan-400/20
                border-dashed
              "
            />

            {/* Gradient Ring */}
            <div
              className="
                absolute
                w-[230px]
                h-[230px]
                sm:w-[300px]
                sm:h-[300px]
                lg:w-[450px]
                lg:h-[450px]
                rounded-full
                p-[5px]
                bg-gradient-to-br
                from-cyan-400
                via-blue-500
                to-purple-500
                shadow-[0_0_70px_rgba(34,211,238,.55)]
              "
            >
              <div className="w-full h-full rounded-full bg-black" />
            </div>

            {/* Floating Image */}
            <motion.img
              src="/images/avator.png"
              alt="Sadat Shafin"
              animate={{
                y: [0, -18, 0],
                rotate: [0, 1.5, 0, -1.5, 0],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.05,
              }}
              className="
                relative
                z-20
                w-[220px]
                sm:w-[300px]
                lg:w-[430px]
                object-contain
                drop-shadow-[0_0_70px_rgba(34,211,238,.45)]
                select-none
                pointer-events-none
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}