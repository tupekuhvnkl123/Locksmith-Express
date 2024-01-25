import Title from "../UI/Title";
import classes from "../../style/Contact/Contact.module.css";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import { contactAnimation } from "../../utils/animationsVariants";
import emailjs from "emailjs-com";
import { useState } from "react";
import { sendEmailRespons } from "../../utils/consts";

const {
  VITE_EMAILJS_SERVICE_ID,
  VITE_EMAILJS_TEMPLATE_ID,
  VITE_EMAILJS_USER_ID,
} = import.meta.env;

const Contact = ({ id }) => {
  const [emailRes, setEmailRes] = useState({ status: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (data) => {
    setIsLoading(true);
    const { successMessage, errorMessage } = sendEmailRespons;
    emailjs
      .send(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        data,
        VITE_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          setEmailRes({ status: "success", message: successMessage });
          setIsLoading(false);
        },
        (error) => {
          setEmailRes({ status: "error", message: error.text || errorMessage });
          setIsLoading(false);
        }
      );
  };

  return (
    <motion.div {...contactAnimation} className={classes.container} id={id}>
      <Title text={"Contact Us"} dark />
      <ContactForm
        onSendEmail={sendEmail}
        emailRes={emailRes}
        isLoading={isLoading}
      />
    </motion.div>
  );
};

export default Contact;
