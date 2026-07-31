import { motion } from "framer-motion";

const stats = [
  { label: "Experience", value: "6+ Months" },
  { label: "Projects", value: "10+" },
  { label: "Technologies", value: "15+" },
  { label: "Clients", value: "5+" },
  { label: "Coffee", value: "∞" },
  { label: "Location", value: "Bangladesh" },
];

export default function About() {
  const glows = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]",
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen w-full overflow-hidden bg-black text-white flex items-center justify-center"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${c}`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20">
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-start gap-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* Profile Image */}
          <motion.div
         
            className="
              relative
              w-[220px]
              h-[220px]
              rounded-3xl
              overflow-hidden
              bg-gradient-to-br
              from-[#1cd8d2]/20
              to-[#302b63]
              shadow-[0_0_45px_rgba(28,216,210,0.15)]
            "
          >
            <img
              src="/images/sadatshafin.webp"
              alt="Sadat Shafin"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Content */}
          <div className="flex-1">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">
              Sadat Shafin
            </h2>

            <p className="mt-2 text-lg sm:text-xl font-semibold text-white/90">
              Full Stack Developer
            </p>

            <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-gray-300">
              I build scalable, modern applications with a strong focus on
              clean architecture, delightful user experiences, and performance.
              My toolkit spans Java-Script, React, Next.js, TypeScript, Tailwind CSS,
              and RESTful APIs—bringing ideas to life from concept to
              production with robust backends and elegant interfaces.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl">
              {stats.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.05 * i,
                    duration: 0.45,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    px-5
                    py-5
                    text-center
                    cursor-default
                    transition-all
                    duration-500
                    hover:border-cyan-300/40
                    hover:bg-white/10
                    hover:shadow-[0_20px_50px_rgba(34,211,238,0.12)]
                  "
                >
                  {/* Animated Gradient */}
                  <motion.div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-cyan-400/10
                      via-transparent
                      to-blue-500/10
                      opacity-0
                      group-hover:opacity-100
                    "
                    transition={{ duration: 0.5 }}
                  />

                  {/* Shine Effect */}
                  <div
                    className="
                      absolute
                      -left-full
                      top-0
                      h-full
                      w-1/2
                      rotate-12
                      bg-gradient-to-r
                      from-transparent
                      via-white/15
                      to-transparent
                      group-hover:left-[150%]
                      transition-all
                      duration-700
                    "
                  />

                  <div className="relative z-10">
                    <h3
                      className="
                        text-sm
                        text-gray-400
                        transition-colors
                        duration-300
                        group-hover:text-cyan-300
                      "
                    >
                      {item.label}
                    </h3>

                   <p
  className={`
    mt-2
    font-semibold
    text-white
    transition-all
    duration-300
    group-hover:tracking-wide
    ${
      item.value === "∞"
        ? "text-4xl leading-none"
        : "text-lg"
    }
  `}
>
  {item.value}
</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}