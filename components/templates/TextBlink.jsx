import { motion } from "framer-motion";

function TextBlink() {
  return (
    <div className="flex flex-col justify-center items-start">
      <motion.p
        initial={{ x: -5, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "tween" }}
        className="text-blue-400 font-terminal tracking-widest text-md"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 0.7, 1, 0.7, 0.4] }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
          }}
        >
          $_
        </motion.span>
      </motion.p>
    </div>
  );
}

export default TextBlink;
