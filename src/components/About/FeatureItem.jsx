import { GiPadlockOpen } from "react-icons/gi";
import classes from "../../style/About/FeatureItem.module.css";

const FeatureItem = ({ text }) => {
  return (
    <div className={classes.item}>
      <GiPadlockOpen className={classes.icon} />
      <p className={classes.text}>{text}</p>
    </div>
  );
};

export default FeatureItem;
