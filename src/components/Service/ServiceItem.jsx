import classes from "../../style/Service/ServiceItem.module.css";
import { motion } from "framer-motion";
import { serviceItemAnimation } from "../../utils/animationsVariants";

const ServiceItem = ({ title, content, Icon, index }) => {
  return (
    <motion.div
      {...serviceItemAnimation}
      transition={{ ...serviceItemAnimation.transition, delay: index / 5 }}
      className={classes.serviceItem}
    >
      <div className={classes.iconContainer}>
        <Icon className={classes.icon} />
      </div>
      <h2 className={classes.title}>{title}</h2>
      <p className={classes.content}>{content}</p>
    </motion.div>
  );
};

export default ServiceItem;
