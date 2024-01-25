import classes from "../../style/Home/Home.module.css";
import { homeContent } from "../../utils/consts";
import Title from "../UI/Title";

const Home = ({ id }) => {
  const openPhoneApp = () => {
    const phoneUrl = `tel:${homeContent.phoneNumber}`;
    window.location.href = phoneUrl;
  };

  return (
    <div className={classes.container} id={id}>
      <div className={classes.contentContainer}>
        <Title className={classes.title} text={homeContent.title} />
        <p className={classes.content}>{homeContent.content}</p>
        <button onClick={openPhoneApp} className={classes.phoneBtn}>
          {homeContent.phoneNumber}
        </button>
      </div>
    </div>
  );
};

export default Home;
