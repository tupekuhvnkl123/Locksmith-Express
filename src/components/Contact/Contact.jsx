import Title from "../UI/Title";
import classes from "../../style/Contact/Contact.module.css";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import { contactAnimation } from "../../utils/animationsVariants";

const Contact = ({ id }) => {
  return (
    <motion.div {...contactAnimation} className={classes.container} id={id}>
      <Title text={"Contact Us"} dark />
      <ContactForm />
    </motion.div>
  );
};

export default Contact;
