import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../../utils/validations";
import classes from "../../style/Contact/ContactForm.module.css";
import Input from "./Input";

const ContactForm = ({ onSendEmail, emailRes, isLoading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(contactSchema) });

  const emailResMsgClass =
    emailRes.status === "success"
      ? classes.successMsg
      : emailRes.status === "error"
      ? classes.errorMsg
      : "";

  return (
    <form onSubmit={handleSubmit(onSendEmail)} className={classes.form}>
      <div className={classes.twoInputsContainer}>
        <Input
          name={"name"}
          label={"Full Name"}
          type={"text"}
          register={register}
          error={errors?.name?.message}
        />
        <Input
          name={"email"}
          label={"E-mail"}
          type={"email"}
          register={register}
          error={errors?.email?.message}
        />
      </div>
      <div className={classes.twoInputsContainer}>
        <Input
          name={"phoneNumber"}
          label={"Phone Number"}
          type={"text"}
          register={register}
          error={errors?.phoneNumber?.message}
        />
        <Input
          name={"address"}
          label={"Address"}
          type={"text"}
          register={register}
          error={errors?.address?.message}
        />
      </div>
      <Input
        name={"content"}
        label={"Content"}
        register={register}
        className={classes.contentInput}
        error={errors?.content?.message}
        textarea
      />

      {emailRes.status && (
        <p className={emailResMsgClass}>{emailRes.message}</p>
      )}

      <button type="submit" className={classes.submitButton}>
        {isLoading ? "Loading..." : "Submit"}
      </button>
    </form>
  );
};

export default ContactForm;
