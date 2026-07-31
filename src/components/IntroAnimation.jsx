import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/*
  Premium Intro Animation
  ---------------------------------------------------------
  - Pure black background
  - Cinematic greeting sequence
  - Longer pauses
  - No name
  - No role
  - Smooth dissolve into portfolio
*/

const GREETINGS = [
  "Salam ",
  "Bonjour",
  "こんにちは",
  "안녕하세요",
  "Здравствуйте",
  "Hello",
];

const TIMING = {
  greetingHold: 650,      // Each greeting stays for 0.65s
  greetingsPause: 800,    // Pause after the last greeting
  finalExit: 500,         // Start fading out sooner
};
const EASE = [0.16, 1, 0.3, 1];

const sceneVariants = {
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    filter: "blur(20px)",
    transition: {
      duration: 1.1,
      ease: EASE,
    },
  },
};

const wordVariants = {
  initial: {
    opacity: 0,
    y: 18,
    filter: "blur(14px)",
  },

  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: EASE,
    },
  },

  exit: {
    opacity: 0,
    y: -12,
    filter: "blur(16px)",
    transition: {
      duration: 0.6,
      ease: EASE,
    },
  },
};

export default function IntroAnimation({ onFinish }) {
  const greetings = useMemo(() => GREETINGS, []);

  const [greetingIndex, setGreetingIndex] = useState(0);
  const [phase, setPhase] = useState("greeting");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (phase !== "greeting") return;

    if (greetingIndex < greetings.length - 1) {
      const timer = setTimeout(() => {
        setGreetingIndex((i) => i + 1);
      }, TIMING.greetingHold);

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setPhase("exit");
    }, TIMING.greetingsPause);

    return () => clearTimeout(timer);
  }, [phase, greetingIndex, greetings.length]);

  useEffect(() => {
    if (phase === "exit") {
      const timer = setTimeout(() => {
        setVisible(false);
      }, TIMING.finalExit);

      return () => clearTimeout(timer);
    }
  }, [phase]);
    return (
    <AnimatePresence onExitComplete={onFinish}>
      {visible && (
        <motion.section
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black"
          variants={sceneVariants}
          initial="visible"
          animate="visible"
          exit="exit"
          style={{
            fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
          }}
        >
          {/* Subtle Ambient Light */}
          <motion.div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              w-[60vw]
              h-[60vw]
              max-w-[700px]
              max-h-[700px]
              rounded-full
              bg-white
              blur-[220px]
            "
            animate={{
              opacity: [0.02, 0.045, 0.02],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Greeting */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={greetingIndex}
              variants={wordVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="
                relative
                z-10
                text-center
                text-white
                font-light
                leading-none
                select-none
                px-6
              "
              style={{
                fontSize: "clamp(2.8rem,8vw,6.5rem)",
                letterSpacing: "-0.02em",
              }}
            >
              {greetings[greetingIndex]}
            </motion.h1>
          </AnimatePresence>

          {/* Premium Film Grain */}
          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              pointer-events-none
              opacity-[0.018]
              mix-blend-soft-light
            "
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />
        </motion.section>
      )}
    </AnimatePresence>
  );
}