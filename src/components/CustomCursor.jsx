import { useEffect,useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor(){
  
  
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() =>{
    const moveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY})
    }
    window.addEventListener("mousemove", moveHandler);
    return () => window.addEventListener("mousemove", moveHandler);

  })
  
  
  
  
  return (
   
    <div className="fixed pointer-events-none top-0 left-0 z-9999"
    style={{mixBlendMode: "difference",
  transform: `translate(${position.x -40}px, ${position.y -40}px)`
}}
    
    
    
    >
      
<motion.div
  animate={{
    scale: [1, 1.08, 1],
    opacity: [0.35, 0.6, 0.35],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="h-24 w-24 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 blur-[60px]"
/>



</div>

  )
} //complete this code and add premiumness 


