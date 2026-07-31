import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      // Smoothness
      duration: 2.2,

      // Mouse wheel
      smoothWheel: true,
      wheelMultiplier: 0.65,

      // Touch
      smoothTouch: false,
      touchMultiplier: 1.1,

      // Scroll feeling
      infinite: false,

      // Prevent overscroll
      syncTouch: false,

      // Interpolation
      lerp: 0.055,
    });

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}