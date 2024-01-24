import Title from "../UI/Title";
import classes from "../../style/Contact/Contact.module.css";
import ContactForm from "./ContactForm";

const Contact = ({ id }) => {
  return (
    <div className={classes.container} id={id}>
      <Title text={"Contact Us"} dark />
      <ContactForm />
    </div>
  );
};

export default Contact;
