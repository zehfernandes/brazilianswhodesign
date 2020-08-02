import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: "5%" },
  show: { opacity: 1, y: "0%" },
  transition: {
    easing: "easeInOut",
  },
};

export default function Title(props) {
  const { text, noAnimation } = props;

  return (
    <motion.h1
      className="m0 p0"
      {...props}
      variants={container}
      initial={noAnimation ? "show" : "hidden"}
      animate="show"
    >
      {text.split("").map((l, i) => {
        if (l == "*") return <br key={`${l}-${i}`} />;
        return (
          <motion.span className="letter" variants={item} key={`${l}-${i}`}>
            {l}
          </motion.span>
        );
      })}
    </motion.h1>
  );
}
