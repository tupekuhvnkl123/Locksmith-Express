import { IoKeySharp } from "react-icons/io5";
import { BiBroadcast } from "react-icons/bi";
import classes from "../../style/UI/TransponderKey.module.css";

const TransponderKey = () => {
  return (
    <div className={classes.container}>
      <IoKeySharp className={classes.keyIcon} />
      <BiBroadcast className={classes.castIcon} />
    </div>
  );
};

export default TransponderKey;
