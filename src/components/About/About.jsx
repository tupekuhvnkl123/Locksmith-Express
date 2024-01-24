import classes from "../../style/About/About.module.css";
import logo from "../../assets/Logo.png";
import Title from "../UI/Title";
import { aboutContent } from "../../utils/consts";

const About = ({ id }) => {
  return (
    <div className={classes.background} id={id}>
      <div className={classes.container}>
        <img src={logo} alt="Logo" className={classes.logoImage} />
        <div className={classes.contentContainer}>
          <Title text={aboutContent.title} className={classes.title} />
          <p className={classes.aboutContent}>{aboutContent.content}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
