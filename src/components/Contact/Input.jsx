import classes from "../../style/Contact/Input.module.css";

const Input = ({ name, type, label, className, onChange, textarea }) => {
  if (textarea) {
    return (
      <div className={`${classes.inputContainer} ${className}`}>
        <label htmlFor={name}>{label}</label>
        <textarea onChange={onChange} name={name} />
      </div>
    );
  }

  return (
    <div className={`${classes.inputContainer} ${className}`}>
      <label htmlFor={name}>{label}</label>
      <input onChange={onChange} type={type} name={name} />
    </div>
  );
};

export default Input;
