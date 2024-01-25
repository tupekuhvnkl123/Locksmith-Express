import classes from "../../style/Contact/Input.module.css";

const Input = ({ name, type, label, className, textarea, register, error }) => {
  if (textarea) {
    return (
      <div className={`${classes.inputContainer} ${className}`}>
        <label htmlFor={name}>{label}</label>
        <textarea {...register(name)} name={name} />
        {error && <p className={classes.errorMsg}>{error}</p>}
      </div>
    );
  }

  return (
    <div className={`${classes.inputContainer} ${className}`}>
      <label htmlFor={name}>{label}</label>
      <input {...register(name)} type={type} name={name} />
      {error && <p className={classes.errorMsg}>{error}</p>}
    </div>
  );
};

export default Input;
