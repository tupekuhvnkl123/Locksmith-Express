import classes from "../../style/Home/Home.module.css";
import { homeContent } from "../../utils/consts";
import Title from "../UI/Title";

const Home = ({ id }) => {
  return (
    <div className={classes.container} id={id}>
      <div className={classes.contentContainer}>
        <Title text={homeContent.title} />
        <p className={classes.content}>{homeContent.content}</p>
        <button className={classes.phoneBtn}>{homeContent.phoneNumber}</button>
      </div>
    </div>
  );
};

export default Home;
