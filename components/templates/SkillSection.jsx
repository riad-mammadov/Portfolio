import splitString from "@/utils/split";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/shadcn/Button";
import { skills } from "@/utils/skills";

function SkillSection({ heading }) {
  const headingChars = splitString(heading);

  const headingCharVariants = {
    hidden: { opacity: 0, x: -100 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 3.8,
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
        delay: headingChars.length * 0.28 + i * 0.07,
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
          <motion.li key={index} variants={charVariants} custom={index}>
            <Button
              variant="ghost"
              className="group px-3 py-1.5 bg-white/5 backdrop-blur-sm font-roboto text-sm font-light hover:cursor-default border border-white/10 rounded-lg hover:border-white/20 hover:bg-white/10 transition-all duration-300 gap-2 h-auto"
            >
              <img
                src={skill.img}
                className="w-4 h-4 rounded-sm flex-shrink-0 object-contain"
                alt={skill.title}
              />
              <span className="text-gray-300 group-hover:text-gray-200 transition-colors whitespace-nowrap">
                {skill.title}
              </span>
            </Button>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

export default SkillSection;
