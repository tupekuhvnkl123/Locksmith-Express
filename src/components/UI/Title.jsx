import classes from "../../style/UI/Title.module.css";
import { motion } from "framer-motion";

const Title = ({ text, dark, className, animation }) => {
  if (animation) {
    return (
      <motion.h1
        className={`${classes.title} ${dark ? classes.dark : ""} ${className}`}
        {...animation}
      >
        {text}
      </motion.h1>
    );
  }

  return (
    <h1 className={`${classes.title} ${dark ? classes.dark : ""} ${className}`}>
      {text}
    </h1>
  );
};

export default Title;
