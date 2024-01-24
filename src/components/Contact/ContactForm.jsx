import classes from "../../style/Contact/ContactForm.module.css";
import Input from "./Input";

const ContactForm = () => {
  return (
    <form className={classes.form}>
      <div className={classes.twoInputsContainer}>
        <Input name={"name"} label={"Full Name"} type={"text"} />
        <Input name={"email"} label={"E-mail"} type={"email"} />
      </div>
      <div className={classes.twoInputsContainer}>
        <Input name={"phoneNumber"} label={"Phone Number"} type={"text"} />
        <Input name={"address"} label={"Address"} type={"text"} />
      </div>
      <Input
        name={"content"}
        label={"Content"}
        className={classes.contentInput}
        textarea
      />

      <button className={classes.submitButton} type="button">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
