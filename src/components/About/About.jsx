import classes from "../../style/About/About.module.css";
import logo from "../../assets/Logo.png";
import Title from "../UI/Title";
import { aboutContent } from "../../utils/consts";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import FeatureItem from "./FeatureItem";

const About = ({ id }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"],
  });

  return (
    <div className={classes.background} id={id}>
      <div className={classes.container}>
        <div className={classes.logoAndContent}>
          <motion.img
            ref={ref}
            style={{ opacity: scrollYProgress }}
            src={logo}
            alt="Logo"
            className={classes.logoImage}
          />
          <motion.div
            ref={ref}
            style={{ opacity: scrollYProgress }}
            className={classes.contentContainer}
          >
            <Title text={aboutContent.title} className={classes.title} />
            <p className={classes.aboutContent}>{aboutContent.content}</p>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          style={{ opacity: scrollYProgress }}
          className={classes.featureItemsContainer}
        >
          {aboutContent.features.map((text) => (
            <FeatureItem text={text} key={text} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
