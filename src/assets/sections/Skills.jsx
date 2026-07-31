import {
  FaJava,
  FaReact,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFastapi,
  SiPython,
  SiDocker,
  SiMongodb,
  SiAngular,
} from "react-icons/si";

import { DiNodejsSmall } from "react-icons/di";

import {
  motion,
  useAnimation,
  useMotionValue
} from "framer-motion";

import {
  useRef,
  useState,
  useEffect,
} from "react";


export default function Skills() {


  const skills = [
    {
      icon: <FaJava />,
      name: "Java",
      color: "from-orange-400 to-red-500"
    },

    {
      icon: <FaReact />,
      name: "React",
      color: "from-cyan-400 to-blue-500"
    },

    {
      icon: <SiNextdotjs />,
      name: "Next.js",
      color: "from-gray-300 to-white"
    },

    {
      icon: <SiTypescript />,
      name: "TypeScript",
      color: "from-blue-400 to-indigo-500"
    },

    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
      color: "from-cyan-300 to-teal-500"
    },

    {
      icon: <SiFastapi />,
      name: "FastAPI",
      color: "from-green-400 to-emerald-500"
    },

    {
      icon: <SiPython />,
      name: "Python",
      color: "from-yellow-300 to-blue-500"
    },

    {
      icon: <SiDocker />,
      name: "Docker",
      color: "from-blue-400 to-sky-600"
    },

    {
      icon: <DiNodejsSmall />,
      name: "Node.js",
      color: "from-green-400 to-lime-500"
    },

    {
      icon: <SiMongodb />,
      name: "MongoDB",
      color: "from-green-500 to-green-700"
    },

    {
      icon: <SiAngular />,
      name: "Angular",
      color: "from-red-500 to-pink-600"
    },
  ];


  // Duplicate array for infinite marquee
  const repeatedSkills = [
    ...skills,
    ...skills,
    ...skills
  ];


  const controls = useAnimation();
  const x = useMotionValue(0);

  const [paused, setPaused] = useState(false);

  const trackRef = useRef(null);



  useEffect(() => {

    if(paused) {
      controls.stop();
      return;
    }


    controls.start({
      x: "-33.333%",
      transition:{
        duration:25,
        ease:"linear",
        repeat:Infinity,
      }
    });


  },[paused,controls]);



  return (

    <section
      id="skills"
      className="
      relative
      min-h-[600px]
      w-full
      bg-black
      text-white
      overflow-hidden
      flex
      flex-col
      justify-center
      items-center
      py-20
      "
    >
            {/* Background Glow */}

      <div className="
      absolute
      inset-0
      pointer-events-none
      ">

        <div className="
        absolute
        top-20
        left-0
        w-[350px]
        h-[350px]
        rounded-full
        bg-gradient-to-r
        from-[#302b63]
        via-[#00bf8f]
        to-[#1cd8d2]
        opacity-20
        blur-[140px]
        animate-pulse
        "/>


        <div className="
        absolute
        bottom-20
        right-0
        w-[350px]
        h-[350px]
        rounded-full
        bg-gradient-to-r
        from-[#1cd8d2]
        via-[#00bf8f]
        to-[#302b63]
        opacity-20
        blur-[140px]
        animate-pulse
        "/>

      </div>



      {/* Heading */}

      <motion.h2

        initial={{
          opacity:0,
          y:-40
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        transition={{
          duration:.6
        }}

        className="
        relative
        z-10
        text-4xl
        sm:text-5xl
        font-bold
        bg-gradient-to-r
        from-[#1cd8d2]
        via-[#00bf8f]
        to-[#302b63]
        bg-clip-text
        text-transparent
        "
      >

        My Skills

      </motion.h2>



      <motion.p

        initial={{
          opacity:0
        }}

        whileInView={{
          opacity:1
        }}

        transition={{
          delay:.2
        }}

        className="
        relative
        z-10
        mt-3
        mb-12
        text-white/70
        text-sm
        sm:text-lg
        "
      >

        Modern Applications | Modern Technologies

      </motion.p>




      {/* Marquee Wrapper */}

      {/* Premium Skills Slider */}

<div

  className="
  relative
  w-full
  overflow-hidden
  "

  onMouseEnter={() => setPaused(true)}

  onMouseLeave={() => setPaused(false)}

>



  {/* Left Fade */}

  <div

    className="
    absolute
    left-0
    top-0
    z-20
    h-full
    w-24
    sm:w-40
    bg-gradient-to-r
    from-black
    via-black/80
    to-transparent
    pointer-events-none
    "

  />



  {/* Right Fade */}

  <div

    className="
    absolute
    right-0
    top-0
    z-20
    h-full
    w-24
    sm:w-40
    bg-gradient-to-l
    from-black
    via-black/80
    to-transparent
    pointer-events-none
    "

  />




  {/* Slider Track */}

  <motion.div

    ref={trackRef}

    style={{ x }}

    animate={controls}

    drag="x"

    dragConstraints={{
      left:-3000,
      right:0
    }}

    dragElastic={0.15}

    dragMomentum={true}

    dragTransition={{
      bounceStiffness:500,
      bounceDamping:30
    }}


    onDragStart={()=>{

      controls.stop();

    }}


    onDragEnd={()=>{


      if(!paused){

        controls.start({

          x:"-33.333%",

          transition:{

            duration:25,

            ease:"linear",

            repeat:Infinity

          }

        })

      }


    }}


    className="
    flex
    gap-6
    sm:gap-8
    w-max
    px-6
    cursor-grab
    active:cursor-grabbing
    select-none
    "

  >



    {
      repeatedSkills.map((skill,index)=>(


        <motion.div

          key={index}


          whileHover={{

            y:-15,

            scale:1.08

          }}


          whileTap={{

            scale:0.95

          }}


          transition={{

            type:"spring",

            stiffness:350,

            damping:15

          }}



          className="

          group

          relative

          w-[140px]

          h-[160px]

          sm:w-[170px]

          sm:h-[190px]

          rounded-3xl

          "

        >




          {/* Animated Glow */}

          <div

            className="

            absolute

            inset-0

            rounded-3xl

            bg-gradient-to-br

            from-[#1cd8d2]

            via-[#00bf8f]

            to-[#302b63]

            opacity-0

            group-hover:opacity-100

            blur-xl

            transition-all

            duration-500

            "

          />





          {/* Glass Card */}

          <div

            className="

            relative

            h-full

            w-full

            rounded-3xl

            bg-white/[0.06]

            backdrop-blur-xl

            border

            border-white/10

            flex

            flex-col

            items-center

            justify-center

            gap-5

            overflow-hidden

            "

          >



            {/* Shine Effect */}

            <div

              className="

              absolute

              -top-20

              -left-20

              w-40

              h-40

              bg-white/20

              rounded-full

              blur-3xl

              group-hover:translate-x-40

              transition-transform

              duration-700

              "

            />





            {/* Floating Icon */}

            <motion.div


              animate={{

                y:[0,-8,0]

              }}


              transition={{

                duration:3,

                repeat:Infinity,

                ease:"easeInOut"

              }}


              className="

              relative

              z-10

              text-5xl

              sm:text-6xl

              text-[#1cd8d2]

              group-hover:text-white

              transition-colors

              duration-300

              "

            >

              {skill.icon}


            </motion.div>





            {/* Skill Name */}

            <p

              className="

              relative

              z-10

              text-sm

              sm:text-base

              font-semibold

              text-white/90

              "

            >

              {skill.name}

            </p>



          </div>


        </motion.div>


      ))
    }



  </motion.div>



</div>
            {/* Bottom Decorative Line */}

      <motion.div

      initial={{
        width:0
      }}

      whileInView={{
        width:"60%"
      }}

      transition={{
        duration:1
      }}

      className="
      mt-16
      h-[2px]
      bg-gradient-to-r
      from-transparent
      via-[#1cd8d2]
      to-transparent
      "

      />



      {/* Small Tech Quote */}

      <motion.p

      initial={{
        opacity:0,
        y:20
      }}

      whileInView={{
        opacity:1,
        y:0
      }}

      transition={{
        delay:.3
      }}

      className="
      mt-6
      text-xs
      sm:text-sm
      text-white/50
      tracking-widest
      uppercase
      "

      >

        Building • Learning • Creating

      </motion.p>



    </section>

  );

}
