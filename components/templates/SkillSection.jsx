import splitString from "@/utils/split";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { skills } from "@/utils/skills";

function SkillSection({ heading }) {
  const headingChars = splitString(heading);

  const headingCharVariants = {
    hidden: { opacity: 0, x: -100 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 5,
        duration: 0.5,
      },
      transitionEnd: { borderRight: "0px solid white" },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, x: -5, borderRight: "0px solid white" },
    show: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: headingChars.length * 0.35 + i * 0.07,
        duration: 0.5,
      },
      transitionEnd: { borderRight: "0px solid white" },
    }),
  };

  return (
    <div className="flex flex-col justify-center items-start mt-6">
      <motion.h1 initial="hidden" animate="show">
        {headingChars.map((char, index) => (
          <motion.span
            className="text-blue-400 text-md tracking-wider font-terminal"
            key={index}
            variants={headingCharVariants}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
      <motion.ul
        className="flex flex-wrap gap-2 text-white pl-3 mt-2"
        initial="hidden"
        animate="show"
      >
        {skills.map((skill, index) => (
          // Maps each item in skills array to the terminal, with a staggered effect
          <motion.li key={index} custom={index} variants={charVariants}>
            <Button className="px-2 py-1 bg-transparent font-rubik rounded-md text-sm hover:cursor-default font-semibold">
              <img src={skill.img} className="w-5 h-5" />
              <p>{skill.title}</p>
            </Button>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

export default SkillSection;
