import classes from "../../style/UI/Title.module.css";

const Title = ({ text, dark, className }) => {
  return (
    <h1 className={`${classes.title} ${dark ? classes.dark : ""} ${className}`}>
      {text}
    </h1>
  );
};

export default Title;
