import { useState } from "react";
import OverlayMenu from "./OverlayMenu";
import { FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/images/logo2.png"
            alt="Logo"
            className="w-8 h-8 object-contain"
          />

     <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white font-Roboto">
  Sadat Shafin
</div>
        </div>

        {/* Desktop Menu */}
       <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* Desktop links go here */}
        </div>

        {/* Mobile Menu Button */}
{/* Center Menu Button */}
<div className="absolute right-6 lg:left-1/2 lg:right-auto lg:-translate-x-1/2">
  <button
    onClick={() => setMenuOpen(true)}
    className="text-white text-3xl focus:outline-none hover:text-cyan-400 transition-colors duration-300"
  >
    <FiMenu />
  </button>
</div>

{/* Reach Me Button */}
<motion.a
  href="#contact"
  whileHover={{
    scale: 1.05,
    y: -2,
  }}
  whileTap={{
    scale: 0.96,
  }}
  transition={{
    type: "spring",
    stiffness: 400,
    damping: 18,
  }}
  className="
    absolute
    right-16
    sm:right-20
    lg:right-6

    hidden
    md:flex

    items-center
    justify-center

    px-5
    py-2.5

    rounded-full

    border
    border-cyan-400/30

    bg-white/5
    backdrop-blur-xl

    text-white
    font-medium
    tracking-wide

    overflow-hidden
    group

    shadow-[0_0_20px_rgba(34,211,238,.12)]
    hover:shadow-[0_0_45px_rgba(34,211,238,.45)]

    transition-all
    duration-500
  "
>
  {/* Animated Gradient */}
  <span
    className="
      absolute
      inset-0

      bg-gradient-to-r
      from-cyan-400/20
      via-sky-400/10
      to-indigo-500/20

      opacity-0
      group-hover:opacity-100

      transition-all
      duration-500
    "
  />

  {/* Shine Effect */}
  <span
    className="
      absolute
      inset-0
      -translate-x-full
      bg-gradient-to-r
      from-transparent
      via-white/25
      to-transparent
      group-hover:translate-x-full
      transition-transform
      duration-1000
    "
  />

  {/* Text */}
  <span className="relative z-10">
    Reach Me
  </span>
</motion.a>
      </nav>

      <OverlayMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}