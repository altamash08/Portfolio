import { motion } from "framer-motion";
import "./DrawA.scss";

const draw = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },

  visible: (i) => {
    const delay = i * 0.3;

    return {
      pathLength: [0, 1, 0],
      opacity: [0, 1, 0],

      transition: {
        delay,
        duration: 4,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    };
  },
};

const DrawA = () => {
  return (
    <div className="drawa-container">
      <motion.svg
        width="400"
        height="400"
        viewBox="0 0 600 600"
        initial="hidden"
        animate="visible"
      >
        {/* Row 1 */}
        <motion.circle
          cx="100"
          cy="100"
          r="70"
          variants={draw}
          custom={1}
          className="shape pink"
        />

        <motion.line
          x1="220"
          y1="30"
          x2="360"
          y2="170"
          variants={draw}
          custom={2}
          className="shape green"
        />

        <motion.line
          x1="220"
          y1="170"
          x2="360"
          y2="30"
          variants={draw}
          custom={2.5}
          className="shape green"
        />

        <motion.rect
          x="410"
          y="30"
          width="140"
          height="140"
          rx="20"
          variants={draw}
          custom={3}
          className="shape blue"
        />

        {/* Row 2 */}
        <motion.circle
          cx="100"
          cy="300"
          r="70"
          variants={draw}
          custom={2}
          className="shape blue"
        />

        <motion.line
          x1="220"
          y1="230"
          x2="360"
          y2="370"
          variants={draw}
          custom={3}
          className="shape pink"
        />

        <motion.line
          x1="220"
          y1="370"
          x2="360"
          y2="230"
          variants={draw}
          custom={3.5}
          className="shape pink"
        />

        <motion.rect
          x="410"
          y="230"
          width="140"
          height="140"
          rx="20"
          variants={draw}
          custom={4}
          className="shape green"
        />

        {/* Row 3 */}
        <motion.circle
          cx="100"
          cy="500"
          r="70"
          variants={draw}
          custom={3}
          className="shape green"
        />

        <motion.line
          x1="220"
          y1="430"
          x2="360"
          y2="570"
          variants={draw}
          custom={4}
          className="shape blue"
        />

        <motion.line
          x1="220"
          y1="570"
          x2="360"
          y2="430"
          variants={draw}
          custom={4.5}
          className="shape blue"
        />

        <motion.rect
          x="410"
          y="430"
          width="140"
          height="140"
          rx="20"
          variants={draw}
          custom={5}
          className="shape pink"
        />
      </motion.svg>
    </div>
  );
};

export default DrawA;