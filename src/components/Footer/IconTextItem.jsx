import classes from "../../style/Footer/IconTextItem.module.css";

const IconTextItem = ({ Icon, text }) => {
  return (
    <div className={classes.iconTextItem}>
      <Icon className={classes.icon} />
      <p className={classes.text}>{text}</p>
    </div>
  );
};

export default IconTextItem;
