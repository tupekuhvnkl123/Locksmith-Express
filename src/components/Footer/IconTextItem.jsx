import classes from "../../style/Footer/IconTextItem.module.css";

const IconTextItem = ({ Icon, text, onClick, className }) => {
  return (
    <div onClick={onClick} className={`${classes.iconTextItem} ${className}`}>
      <Icon className={classes.icon} />
      <p className={classes.text}>{text}</p>
    </div>
  );
};

export default IconTextItem;
